"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Classroom_1 = require("../../../models/Classroom");
const Pass_1 = require("../../../models/Pass");
const Student_1 = require("../../../models/Student");
const Teacher_1 = require("../../../models/Teacher");
const ClassroomPassesArgs_1 = require("./args/ClassroomPassesArgs");
const ClassroomStudentsArgs_1 = require("./args/ClassroomStudentsArgs");
const helpers_1 = require("../../../helpers");
let ClassroomRelationsResolver = class ClassroomRelationsResolver {
    async students(classroom, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.findUnique({
            where: {
                id: classroom.id,
            },
        }).students(args);
    }
    async teacher(classroom, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.findUnique({
            where: {
                id: classroom.id,
            },
        }).teacher({});
    }
    async passes(classroom, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.findUnique({
            where: {
                id: classroom.id,
            },
        }).passes(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Student_1.Student], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Classroom_1.Classroom, Object, ClassroomStudentsArgs_1.ClassroomStudentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomRelationsResolver.prototype, "students", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Teacher_1.Teacher, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Classroom_1.Classroom, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomRelationsResolver.prototype, "teacher", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Pass_1.Pass], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Classroom_1.Classroom, Object, ClassroomPassesArgs_1.ClassroomPassesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomRelationsResolver.prototype, "passes", null);
ClassroomRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Classroom_1.Classroom)
], ClassroomRelationsResolver);
exports.ClassroomRelationsResolver = ClassroomRelationsResolver;
