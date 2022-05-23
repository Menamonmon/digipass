"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateStudentArgs_1 = require("./args/AggregateStudentArgs");
const CreateManyStudentArgs_1 = require("./args/CreateManyStudentArgs");
const CreateStudentArgs_1 = require("./args/CreateStudentArgs");
const DeleteManyStudentArgs_1 = require("./args/DeleteManyStudentArgs");
const DeleteStudentArgs_1 = require("./args/DeleteStudentArgs");
const FindFirstStudentArgs_1 = require("./args/FindFirstStudentArgs");
const FindManyStudentArgs_1 = require("./args/FindManyStudentArgs");
const FindUniqueStudentArgs_1 = require("./args/FindUniqueStudentArgs");
const GroupByStudentArgs_1 = require("./args/GroupByStudentArgs");
const UpdateManyStudentArgs_1 = require("./args/UpdateManyStudentArgs");
const UpdateStudentArgs_1 = require("./args/UpdateStudentArgs");
const UpsertStudentArgs_1 = require("./args/UpsertStudentArgs");
const helpers_1 = require("../../../helpers");
const Student_1 = require("../../../models/Student");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateStudent_1 = require("../../outputs/AggregateStudent");
const StudentGroupBy_1 = require("../../outputs/StudentGroupBy");
let StudentCrudResolver = class StudentCrudResolver {
    async student(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstStudent(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async students(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createStudent(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyStudent(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteStudent(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateStudent(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyStudent(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyStudent(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertStudent(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateStudent(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).student.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByStudent(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Student_1.Student, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStudentArgs_1.FindUniqueStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentCrudResolver.prototype, "student", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Student_1.Student, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStudentArgs_1.FindFirstStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentCrudResolver.prototype, "findFirstStudent", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Student_1.Student], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyStudentArgs_1.FindManyStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentCrudResolver.prototype, "students", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Student_1.Student, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateStudentArgs_1.CreateStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentCrudResolver.prototype, "createStudent", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyStudentArgs_1.CreateManyStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentCrudResolver.prototype, "createManyStudent", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Student_1.Student, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteStudentArgs_1.DeleteStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentCrudResolver.prototype, "deleteStudent", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Student_1.Student, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateStudentArgs_1.UpdateStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentCrudResolver.prototype, "updateStudent", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyStudentArgs_1.DeleteManyStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentCrudResolver.prototype, "deleteManyStudent", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyStudentArgs_1.UpdateManyStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentCrudResolver.prototype, "updateManyStudent", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Student_1.Student, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertStudentArgs_1.UpsertStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentCrudResolver.prototype, "upsertStudent", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateStudent_1.AggregateStudent, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateStudentArgs_1.AggregateStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentCrudResolver.prototype, "aggregateStudent", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [StudentGroupBy_1.StudentGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByStudentArgs_1.GroupByStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentCrudResolver.prototype, "groupByStudent", null);
StudentCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Student_1.Student)
], StudentCrudResolver);
exports.StudentCrudResolver = StudentCrudResolver;
