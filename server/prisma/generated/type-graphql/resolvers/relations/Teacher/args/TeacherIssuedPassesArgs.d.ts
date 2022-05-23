import { PassOrderByWithRelationInput } from "../../../inputs/PassOrderByWithRelationInput";
import { PassWhereInput } from "../../../inputs/PassWhereInput";
import { PassWhereUniqueInput } from "../../../inputs/PassWhereUniqueInput";
export declare class TeacherIssuedPassesArgs {
    where?: PassWhereInput | undefined;
    orderBy?: PassOrderByWithRelationInput[] | undefined;
    cursor?: PassWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "studentId" | "classId" | "createdAt" | "startTime" | "endTime" | "duration" | "issuerId"> | undefined;
}
