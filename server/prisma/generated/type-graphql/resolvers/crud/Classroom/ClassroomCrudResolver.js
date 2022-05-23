"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateClassroomArgs_1 = require("./args/AggregateClassroomArgs");
const CreateClassroomArgs_1 = require("./args/CreateClassroomArgs");
const CreateManyClassroomArgs_1 = require("./args/CreateManyClassroomArgs");
const DeleteClassroomArgs_1 = require("./args/DeleteClassroomArgs");
const DeleteManyClassroomArgs_1 = require("./args/DeleteManyClassroomArgs");
const FindFirstClassroomArgs_1 = require("./args/FindFirstClassroomArgs");
const FindManyClassroomArgs_1 = require("./args/FindManyClassroomArgs");
const FindUniqueClassroomArgs_1 = require("./args/FindUniqueClassroomArgs");
const GroupByClassroomArgs_1 = require("./args/GroupByClassroomArgs");
const UpdateClassroomArgs_1 = require("./args/UpdateClassroomArgs");
const UpdateManyClassroomArgs_1 = require("./args/UpdateManyClassroomArgs");
const UpsertClassroomArgs_1 = require("./args/UpsertClassroomArgs");
const helpers_1 = require("../../../helpers");
const Classroom_1 = require("../../../models/Classroom");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateClassroom_1 = require("../../outputs/AggregateClassroom");
const ClassroomGroupBy_1 = require("../../outputs/ClassroomGroupBy");
let ClassroomCrudResolver = class ClassroomCrudResolver {
    async classroom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstClassroom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async classrooms(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createClassroom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyClassroom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteClassroom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateClassroom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyClassroom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyClassroom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertClassroom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateClassroom(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByClassroom(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Classroom_1.Classroom, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueClassroomArgs_1.FindUniqueClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomCrudResolver.prototype, "classroom", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Classroom_1.Classroom, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstClassroomArgs_1.FindFirstClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomCrudResolver.prototype, "findFirstClassroom", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Classroom_1.Classroom], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyClassroomArgs_1.FindManyClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomCrudResolver.prototype, "classrooms", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Classroom_1.Classroom, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateClassroomArgs_1.CreateClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomCrudResolver.prototype, "createClassroom", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyClassroomArgs_1.CreateManyClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomCrudResolver.prototype, "createManyClassroom", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Classroom_1.Classroom, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteClassroomArgs_1.DeleteClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomCrudResolver.prototype, "deleteClassroom", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Classroom_1.Classroom, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateClassroomArgs_1.UpdateClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomCrudResolver.prototype, "updateClassroom", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyClassroomArgs_1.DeleteManyClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomCrudResolver.prototype, "deleteManyClassroom", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyClassroomArgs_1.UpdateManyClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomCrudResolver.prototype, "updateManyClassroom", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Classroom_1.Classroom, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertClassroomArgs_1.UpsertClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomCrudResolver.prototype, "upsertClassroom", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateClassroom_1.AggregateClassroom, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateClassroomArgs_1.AggregateClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomCrudResolver.prototype, "aggregateClassroom", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ClassroomGroupBy_1.ClassroomGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByClassroomArgs_1.GroupByClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassroomCrudResolver.prototype, "groupByClassroom", null);
ClassroomCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Classroom_1.Classroom)
], ClassroomCrudResolver);
exports.ClassroomCrudResolver = ClassroomCrudResolver;
