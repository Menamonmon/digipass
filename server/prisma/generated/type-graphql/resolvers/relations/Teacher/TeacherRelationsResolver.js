"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Classroom_1 = require("../../../models/Classroom");
const Pass_1 = require("../../../models/Pass");
const Teacher_1 = require("../../../models/Teacher");
const TeacherClassroomsArgs_1 = require("./args/TeacherClassroomsArgs");
const TeacherIssuedPassesArgs_1 = require("./args/TeacherIssuedPassesArgs");
const helpers_1 = require("../../../helpers");
let TeacherRelationsResolver = class TeacherRelationsResolver {
    async classrooms(teacher, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.findUnique({
            where: {
                id: teacher.id,
            },
        }).classrooms(args);
    }
    async issuedPasses(teacher, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.findUnique({
            where: {
                id: teacher.id,
            },
        }).issuedPasses(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Classroom_1.Classroom], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Teacher_1.Teacher, Object, TeacherClassroomsArgs_1.TeacherClassroomsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeacherRelationsResolver.prototype, "classrooms", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Pass_1.Pass], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Teacher_1.Teacher, Object, TeacherIssuedPassesArgs_1.TeacherIssuedPassesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeacherRelationsResolver.prototype, "issuedPasses", null);
TeacherRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Teacher_1.Teacher)
], TeacherRelationsResolver);
exports.TeacherRelationsResolver = TeacherRelationsResolver;
