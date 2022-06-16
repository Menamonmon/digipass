import { identifyEmailType } from "./userVerification";
import { GraphQlContext } from "./../types";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import jsonwebtoken from "jsonwebtoken";
import { RegisterResponse } from "./types";
import { oauth2Client } from "./google-oauth-client";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async helloWorld() {
    return "Hello World!";
  }

  @Mutation(() => RegisterResponse, { nullable: true })
  async registerStudentWithGoogle(
    @Ctx() { prisma }: GraphQlContext,
    @Arg("idToken") idToken: string
  ): Promise<RegisterResponse | null> {
    const selectedFields = {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      pictureUrl: true,
    };
    try {
      // Fetching the user data using the Google ID token
      const ticket = await oauth2Client.verifyIdToken({
        idToken,
        audience: process.env.CLIENT_ID,
      });
      const {
        given_name: firstName,
        family_name: lastName,
        picture: pictureUrl,
        email: email,
      } = ticket.getPayload();
      if (identifyEmailType(email) !== "student") {
        return null;
      }

      const studentId = email.split("@")[0];
      let student: RegisterResponse = await prisma.student.findUnique({
        where: { email },
        select: selectedFields,
      });

      if (student === null) {
        // Create a new user if the email doesn't exist
        student = await prisma.student.create({
          data: {
            firstName,
            lastName,
            email,
            pictureUrl,
            studentId,
          },
          select: selectedFields,
        });
        student.userType = "new_student";
      } else {
        // Update last login if the user already exists
        student = await prisma.student.update({
          where: { email },
          data: {
            lastLogin: new Date(),
          },
        });
        student = { ...student, userType: "old_student" };
      }

      const jwt = jsonwebtoken.sign(
        {
          id: student.id,
          email: student.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "2hr" }
      );
      return { ...student, jwt };
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export const authResolvers = [RegisterResolver];
