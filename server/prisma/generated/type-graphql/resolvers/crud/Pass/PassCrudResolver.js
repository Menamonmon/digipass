"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePassArgs_1 = require("./args/AggregatePassArgs");
const CreateManyPassArgs_1 = require("./args/CreateManyPassArgs");
const CreatePassArgs_1 = require("./args/CreatePassArgs");
const DeleteManyPassArgs_1 = require("./args/DeleteManyPassArgs");
const DeletePassArgs_1 = require("./args/DeletePassArgs");
const FindFirstPassArgs_1 = require("./args/FindFirstPassArgs");
const FindManyPassArgs_1 = require("./args/FindManyPassArgs");
const FindUniquePassArgs_1 = require("./args/FindUniquePassArgs");
const GroupByPassArgs_1 = require("./args/GroupByPassArgs");
const UpdateManyPassArgs_1 = require("./args/UpdateManyPassArgs");
const UpdatePassArgs_1 = require("./args/UpdatePassArgs");
const UpsertPassArgs_1 = require("./args/UpsertPassArgs");
const helpers_1 = require("../../../helpers");
const Pass_1 = require("../../../models/Pass");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePass_1 = require("../../outputs/AggregatePass");
const PassGroupBy_1 = require("../../outputs/PassGroupBy");
let PassCrudResolver = class PassCrudResolver {
    async pass(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPass(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async passes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createPass(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyPass(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deletePass(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updatePass(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPass(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyPass(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertPass(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregatePass(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByPass(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Pass_1.Pass, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePassArgs_1.FindUniquePassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PassCrudResolver.prototype, "pass", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Pass_1.Pass, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPassArgs_1.FindFirstPassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PassCrudResolver.prototype, "findFirstPass", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Pass_1.Pass], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPassArgs_1.FindManyPassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PassCrudResolver.prototype, "passes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pass_1.Pass, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreatePassArgs_1.CreatePassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PassCrudResolver.prototype, "createPass", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPassArgs_1.CreateManyPassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PassCrudResolver.prototype, "createManyPass", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pass_1.Pass, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeletePassArgs_1.DeletePassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PassCrudResolver.prototype, "deletePass", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pass_1.Pass, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdatePassArgs_1.UpdatePassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PassCrudResolver.prototype, "updatePass", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPassArgs_1.DeleteManyPassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PassCrudResolver.prototype, "deleteManyPass", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPassArgs_1.UpdateManyPassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PassCrudResolver.prototype, "updateManyPass", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pass_1.Pass, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertPassArgs_1.UpsertPassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PassCrudResolver.prototype, "upsertPass", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePass_1.AggregatePass, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePassArgs_1.AggregatePassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PassCrudResolver.prototype, "aggregatePass", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PassGroupBy_1.PassGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPassArgs_1.GroupByPassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PassCrudResolver.prototype, "groupByPass", null);
PassCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pass_1.Pass)
], PassCrudResolver);
exports.PassCrudResolver = PassCrudResolver;
