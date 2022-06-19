import { firebaseml_v1beta2 } from "googleapis";
import { classroom } from "googleapis/build/src/apis/classroom";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import {
  Classroom,
  ClassroomUpdateInput,
  CreateClassroomResolver,
} from "../../prisma/generated/type-graphql";
import { AuthenticatedGraphQLContext } from "../auth/types";
import { LimitedClassroom, TeacherClassroomUpdateInput } from "./types";

@Resolver()
class ClassroomsResolvers {
  @Authorized("teacher")
  @Mutation(() => Classroom, { nullable: true })
  async updateClassroom(
    @Ctx() { prisma, user }: AuthenticatedGraphQLContext,
    @Arg("classId") classId: string,
    @Arg("data")
    data: TeacherClassroomUpdateInput
  ): Promise<Classroom | null> {
    const { id: teacherId } = user;
    const updatedClassrooms = await prisma.classroom.updateMany({
      where: {
        id: classId,
        teacherId,
        archived: false,
      },
      data,
    });
    return updatedClassrooms[0];
  }

  @Authorized("teacher")
  @Mutation(() => Classroom, { nullable: true })
  async archiveClassroom(
    @Ctx() { prisma, user }: AuthenticatedGraphQLContext,
    @Arg("classId") classId: string
  ): Promise<Classroom | null> {
    const { id: teacherId } = user;
    return await prisma.classroom.update({
      where: {
        teacherId_id: {
          id: classId,
          teacherId,
        },
      },
      data: {
        archived: true,
      },
    });
  }

  @Authorized("teacher")
  @Query(() => Classroom, { nullable: true })
  async teacherClassroom(
    @Ctx() { prisma, user }: AuthenticatedGraphQLContext,
    @Arg("classId") classId: string
  ): Promise<Classroom | null> {
    const { id: teacherId } = user;
    const classroom = await prisma.classroom.findUnique({
      where: {
        teacherId_id: {
          teacherId,
          id: classId,
        },
      },
    });
    if (classroom && !classroom.archived) {
      return classroom;
    }
    return null;
  }

  @Authorized("teacher")
  @Query(() => [Classroom], { nullable: true })
  async teacherClassrooms(
    @Ctx() { prisma, user }: AuthenticatedGraphQLContext
  ): Promise<Classroom[] | null> {
    const { id: teacherId } = user;
    const classrooms = await prisma.classroom.findMany({
      where: { teacherId, archived: false },
    });
    return classrooms;
  }

  @Authorized("student")
  @Query(() => LimitedClassroom, { nullable: true })
  async studentClassroom(
    @Ctx() { prisma, user }: AuthenticatedGraphQLContext,
    @Arg("classId", { nullable: true }) classId?: string,
    @Arg("classCode", { nullable: true }) classCode?: string
  ): Promise<LimitedClassroom | null> {
    if (classId || classCode) {
      const classroom = await prisma.classroom.findUnique({
        where: { id: classId, classCode: classCode },
      });
      if (!classroom.archived) {
        return classroom;
      }
    }
    return null;
  }

  @Authorized("student")
  @Query(() => [Classroom], { nullable: true })
  async studentClassrooms(
    @Ctx() { prisma, user }: AuthenticatedGraphQLContext
  ): Promise<Classroom[] | null> {
    const { id: studentId } = user;
    const classrooms = await prisma.classroom.findMany({
      where: {
        archived: false,
        students: {
          some: {
            studentId,
          },
        },
      },
    });
    return classrooms;
  }
}

export const classroomsResolvers = [
  ClassroomsResolvers,
  CreateClassroomResolver,
];
