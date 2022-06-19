import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
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

    const { id: teacherId } = user;
    const updatedPasses = await prisma.pass.updateMany({
      where: {
        id: passId,
        issuerId: teacherId,
        classroom: {
          teacherId,
          archived: false,
        },
      },
      data: {
        approved,
      },
    });
    return updatedPasses[0];
  }

  @Authorized("teacher")
  @Query(() => Pass, { nullable: true })
  async teacherGetPass(
    @Ctx() { prisma, user }: AuthenticatedGraphQLContext,
    @Arg("passId") passId: string
  ): Promise<Pass | null> {
    const { id: issuerId } = user;
    return await prisma.pass.findUnique({
      where: {
        id_issuerId: {
          id: passId,
          issuerId,
        },
      },
    });
  }

  @Authorized("teacher")
  @Query(() => [Pass], { nullable: true })
  async teacherGetMyPasses(
    @Ctx() { prisma, user }: AuthenticatedGraphQLContext,
    @Arg("classId", { nullable: true }) classId?: string
  ): Promise<Pass[] | null> {
    const { id: issuerId } = user;
    return await prisma.pass.findMany({
      where: {
        classId,
        issuerId,
      },
    });
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

    if (classroom && !classroom.archived) {
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

  @Authorized("student")
  @Query(() => Pass, { nullable: true })
  async studentGetPass(
    @Ctx() { prisma, user }: AuthenticatedGraphQLContext,
    @Arg("passId") passId: string
  ): Promise<Pass | null> {
    const { id: studentId } = user;
    return await prisma.pass.findUnique({
      where: {
        id_studentId: {
          id: passId,
          studentId,
        },
      },
    });
  }

  @Authorized("student")
  @Query(() => [Pass], { nullable: true })
  async studentGetMyPasses(
    @Ctx() { prisma, user }: AuthenticatedGraphQLContext
  ): Promise<Pass[] | null> {
    const { id: studentId } = user;
    return await prisma.pass.findMany({
      where: {
        studentId,
      },
    });
  }
}

export const passesResolvers = [PassMutationsResolver];
