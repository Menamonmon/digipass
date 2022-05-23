"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTeacherArgs_1 = require("./args/AggregateTeacherArgs");
const CreateManyTeacherArgs_1 = require("./args/CreateManyTeacherArgs");
const CreateTeacherArgs_1 = require("./args/CreateTeacherArgs");
const DeleteManyTeacherArgs_1 = require("./args/DeleteManyTeacherArgs");
const DeleteTeacherArgs_1 = require("./args/DeleteTeacherArgs");
const FindFirstTeacherArgs_1 = require("./args/FindFirstTeacherArgs");
const FindManyTeacherArgs_1 = require("./args/FindManyTeacherArgs");
const FindUniqueTeacherArgs_1 = require("./args/FindUniqueTeacherArgs");
const GroupByTeacherArgs_1 = require("./args/GroupByTeacherArgs");
const UpdateManyTeacherArgs_1 = require("./args/UpdateManyTeacherArgs");
const UpdateTeacherArgs_1 = require("./args/UpdateTeacherArgs");
const UpsertTeacherArgs_1 = require("./args/UpsertTeacherArgs");
const helpers_1 = require("../../../helpers");
const Teacher_1 = require("../../../models/Teacher");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTeacher_1 = require("../../outputs/AggregateTeacher");
const TeacherGroupBy_1 = require("../../outputs/TeacherGroupBy");
let TeacherCrudResolver = class TeacherCrudResolver {
    async teacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async teachers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateTeacher(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByTeacher(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Teacher_1.Teacher, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTeacherArgs_1.FindUniqueTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "teacher", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Teacher_1.Teacher, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTeacherArgs_1.FindFirstTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "findFirstTeacher", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Teacher_1.Teacher], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTeacherArgs_1.FindManyTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "teachers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Teacher_1.Teacher, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTeacherArgs_1.CreateTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "createTeacher", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTeacherArgs_1.CreateManyTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "createManyTeacher", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Teacher_1.Teacher, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTeacherArgs_1.DeleteTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "deleteTeacher", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Teacher_1.Teacher, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTeacherArgs_1.UpdateTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "updateTeacher", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTeacherArgs_1.DeleteManyTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "deleteManyTeacher", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTeacherArgs_1.UpdateManyTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "updateManyTeacher", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Teacher_1.Teacher, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertTeacherArgs_1.UpsertTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "upsertTeacher", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTeacher_1.AggregateTeacher, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTeacherArgs_1.AggregateTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "aggregateTeacher", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TeacherGroupBy_1.TeacherGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTeacherArgs_1.GroupByTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeacherCrudResolver.prototype, "groupByTeacher", null);
TeacherCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Teacher_1.Teacher)
], TeacherCrudResolver);
exports.TeacherCrudResolver = TeacherCrudResolver;
