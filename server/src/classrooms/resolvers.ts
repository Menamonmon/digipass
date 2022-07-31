import { firebaseml_v1beta2 } from "googleapis";
import { classroom } from "googleapis/build/src/apis/classroom";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import {
  Classroom,
  CreateManyClassroomResolver,
  CreateOneClassroomResolver,
  StudentsOnClassrooms,
} from "../../prisma/generated/type-graphql";
import { AuthenticatedGraphQLContext } from "../auth/types";
import { LimitedClassroom, TeacherClassroomUpdateInput } from "./types";

@Resolver()
class ClassroomsResolvers {
  @Authorized("teacher")
  @Mutation(() => Classroom, { nullable: true })
  async updateClassroom(
    @Ctx() { prisma, user }: AuthenticatedGraphQLContext,
    @Arg("classroomId") classroomId: string,
    @Arg("data")
    data: TeacherClassroomUpdateInput
  ): Promise<Classroom | null> {
    const { id: teacherId } = user;
    const updatedClassrooms = await prisma.classroom.updateMany({
      where: {
        id: classroomId,
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
    @Arg("classroomId") classroomId: string
  ): Promise<Classroom | null> {
    const { id: teacherId } = user;
    return await prisma.classroom.update({
      where: {
        id_teacherId: {
          id: classroomId,
          teacherId,
        },
      },
      data: {
        archived: true,
      },
    });
  }

  @Authorized("teacher")
  @Mutation(() => StudentsOnClassrooms, { nullable: true })
  async addStudentToClassroom(
    @Ctx() { prisma, user }: AuthenticatedGraphQLContext,
    @Arg("classroomId") classroomId: string,
    @Arg("studentId") studentId: string
  ): Promise<StudentsOnClassrooms | null> {
    const { id: teacherId } = user;
    return await prisma.studentsOnClassrooms.create({
      data: {
        classroom: {
          connect: {
            id: classroomId,
          },
        },
        assignedBy: {
          connect: {
            id: teacherId,
          },
        },
        student: {
          connect: {
            id: studentId,
          },
        },
      },
    });
  }

  // To remove a student from a classroom, the teacher must be the one who assigned them
  @Authorized("teacher")
  @Mutation(() => StudentsOnClassrooms, { nullable: true })
  async removeStudentFromClassroom(
    @Ctx() { prisma, user }: AuthenticatedGraphQLContext,
    @Arg("classroomId") classroomId: string,
    @Arg("studentId") studentId: string
  ): Promise<StudentsOnClassrooms | null> {
    const { id: teahcerId } = user;
    return (
      await prisma.studentsOnClassrooms.deleteMany({
        where: {
          classroomId,
          studentId,
          assignedById: teahcerId,
        },
      })
    )[0];
  }

  @Authorized("teacher")
  @Query(() => Classroom, { nullable: true })
  async teacherClassroom(
    @Ctx() { prisma, user }: AuthenticatedGraphQLContext,
    @Arg("classroomId") classroomId: string
  ): Promise<Classroom | null> {
    const { id: teacherId } = user;
    const classroom = await prisma.classroom.findUnique({
      where: {
        id_teacherId: {
          teacherId,
          id: classroomId,
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
    @Arg("classroomId", { nullable: true }) classroomId?: string,
    @Arg("classCode", { nullable: true }) classCode?: string
  ): Promise<LimitedClassroom | null> {
    if (classroomId || classCode) {
      const classroom = await prisma.classroom.findUnique({
        where: { id: classroomId, classCode: classCode },
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
  CreateManyClassroomResolver,
  CreateOneClassroomResolver,
];
