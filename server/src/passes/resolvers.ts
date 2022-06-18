import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Pass } from "../../prisma/generated/type-graphql";
import { AuthenticatedGraphQLContext } from "../auth/types";
import { mapTimeToToday } from "./utilts";

@Resolver()
class PassMutationsResolver {
  // Return null if the pass doesn't exist or
  // the teacher is trying to edit a pass that in none of his classrooms
  @Authorized("teacher")
  @Mutation(() => Pass, { nullable: true })
  async teacherUpdatePass(
    @Ctx() { prisma, user }: AuthenticatedGraphQLContext,
    @Arg("passId") passId: string,
    @Arg("approved") approved: boolean
  ): Promise<Pass | null> {
    // Ensure that the pass exists
    // Ensure that it has a classroom asscoiated with it
    // Ensure that the teacher of that classroom is the same as the teacher making the mutaiton

    const pass = await prisma.pass.findUnique({
      where: { id: passId },
    });

    const { id: teacherId } = user;
    if (pass) {
      const { classId, issuerId } = pass;
      const associatedClassroom = await prisma.classroom.findUnique({
        where: { id: classId },
      });
      if (associatedClassroom) {
        if (
          associatedClassroom.teacherId === issuerId &&
          associatedClassroom.teacherId === teacherId
        ) {
          // Update the pass if its valid with the value that the teacher requested
          const updatedPass = await prisma.pass.update({
            where: { id: pass.id },
            data: {
              approved,
            },
          });
          return updatedPass;
        }
      }
    }
    return null;
  }

  // Returns null if the student already has a pass during the time period of that class
  // or if that class doesn't exist
  @Authorized("student")
  @Mutation(() => Pass, { nullable: true })
  async studentCreatePass(
    @Ctx() { prisma, user }: AuthenticatedGraphQLContext,
    @Arg("classroomId") classroomId: string,
    @Arg("reason") reason: string
  ): Promise<Pass | null> {
    const { id } = user;
    const studentId = id;
    const classroom = await prisma.classroom.findUnique({
      where: { id: classroomId },
    });

    if (classroom) {
      // Checking if the student already has a pass for that specific class

      const todayClassroomStartTime = mapTimeToToday(
        classroom.startHour,
        classroom.startMinute
      );
      const todayClassroomEndTime = mapTimeToToday(
        classroom.endHour,
        classroom.endMinute
      );
      const existingPassForToday = await prisma.pass.findFirst({
        where: {
          studentId,
          classId: classroom.id,
          createdAt: {
            gt: todayClassroomStartTime,
            lt: todayClassroomEndTime,
          },
        },
      });
      if (existingPassForToday) {
        return null;
      }
      const newPass = await prisma.pass.create({
        data: {
          studentId,
          classId: classroom.id,
          duration: 7,
          approved: false,
          reason: reason,
          issuerId: classroom.teacherId,
        },
      });

      //TODO: Implement ping teacher event and specific student joining the classroom's passses lobby
      return newPass;
    }
    return null;
  }
}

export const passesResolvers = [PassMutationsResolver];
