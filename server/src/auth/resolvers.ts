import { identifyEmailType } from "./userVerification";
import { GraphQLContext } from "./../types";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import jsonwebtoken from "jsonwebtoken";
import {
  AuthenticatedGraphQLContext,
  CurrentUser,
  StudentRegistrationResponse,
  TeacherRegistrationResponse,
} from "./types";
import { oauth2Client } from "./google-oauth-client";

@Resolver()
class RegisterResolver {
  @Mutation(() => StudentRegistrationResponse, { nullable: true })
  async registerStudentWithGoogle(
    @Ctx() { prisma }: GraphQLContext,
    @Arg("idToken") idToken: string
  ): Promise<StudentRegistrationResponse | null> {
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
      let student = await prisma.student.findUnique({
        where: { email },
        select: selectedFields,
      });

      let userType: StudentRegistrationResponse["userType"] = "old_student";

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
        userType = "new_student";
      } else {
        // Update last login if the user already exists
        student = await prisma.student.update({
          where: { email },
          data: {
            lastLogin: new Date(),
          },
        });
      }

      const expiresIn = 2 * 60 * 60;
      const jwt = jsonwebtoken.sign(
        {
          id: student.id,
          email: student.email,
          userType: "student",
        },
        process.env.JWT_SECRET,
        {
          algorithm: "HS256",
          subject: student.id.toString(),
          expiresIn: expiresIn,
        }
      );
      return { jwt, userType, expiresIn };
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  @Mutation(() => TeacherRegistrationResponse, { nullable: true })
  async registerTeacherWithGoogle(
    @Ctx() { prisma }: GraphQLContext,
    @Arg("idToken") idToken: string
  ): Promise<TeacherRegistrationResponse | null> {
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
      if (identifyEmailType(email) !== "teacher") {
        return null;
      }

      let teacher = await prisma.teacher.findUnique({
        where: { email },
        select: selectedFields,
      });
      let userType: TeacherRegistrationResponse["userType"] = "old_teacher";

      if (teacher === null) {
        // Create a new user if the email doesn't exist
        teacher = await prisma.teacher.create({
          data: {
            firstName,
            lastName,
            email,
            pictureUrl,
          },
          select: selectedFields,
        });
        userType = "new_teacher";
      } else {
        // Update last login if the user already exists
        teacher = await prisma.teacher.update({
          where: { email },
          data: {
            lastLogin: new Date(),
          },
        });
      }

      const expiresIn = 24 * 60 * 60;
      const jwt = jsonwebtoken.sign(
        {
          id: teacher.id,
          email: teacher.email,
          userType: "teacher",
        },
        process.env.JWT_SECRET,
        {
          algorithm: "HS256",
          subject: teacher.id.toString(),
          expiresIn: expiresIn,
        }
      );
      return { jwt, userType, expiresIn };
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

@Resolver()
class CurrentUserResolver {
  @Query(() => CurrentUser, { nullable: true })
  async currentUser(
    @Ctx() { prisma, user: jwtUserInfo }: AuthenticatedGraphQLContext
  ): Promise<CurrentUser | null> {
    if (jwtUserInfo) {
      const { userType } = jwtUserInfo;
      const userId = jwtUserInfo.id;
      let user = null;
      if (userType === "student") {
        user = await prisma.student.findUnique({ where: { id: userId } });
      } else {
        user = await prisma.teacher.findUnique({ where: { id: userId } });
      }
      if (user) {
        const { id, email, firstName, lastName, pictureUrl } = user;
        user = { id: id.toString(), email, firstName, lastName, pictureUrl };
      }
      return user;
    }
    return null;
  }
}

export const authResolvers = [RegisterResolver, CurrentUserResolver];
