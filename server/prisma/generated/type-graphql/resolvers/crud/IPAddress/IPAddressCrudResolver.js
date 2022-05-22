"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateIPAddressArgs_1 = require("./args/AggregateIPAddressArgs");
const CreateIPAddressArgs_1 = require("./args/CreateIPAddressArgs");
const CreateManyIPAddressArgs_1 = require("./args/CreateManyIPAddressArgs");
const DeleteIPAddressArgs_1 = require("./args/DeleteIPAddressArgs");
const DeleteManyIPAddressArgs_1 = require("./args/DeleteManyIPAddressArgs");
const FindFirstIPAddressArgs_1 = require("./args/FindFirstIPAddressArgs");
const FindManyIPAddressArgs_1 = require("./args/FindManyIPAddressArgs");
const FindUniqueIPAddressArgs_1 = require("./args/FindUniqueIPAddressArgs");
const GroupByIPAddressArgs_1 = require("./args/GroupByIPAddressArgs");
const UpdateIPAddressArgs_1 = require("./args/UpdateIPAddressArgs");
const UpdateManyIPAddressArgs_1 = require("./args/UpdateManyIPAddressArgs");
const UpsertIPAddressArgs_1 = require("./args/UpsertIPAddressArgs");
const helpers_1 = require("../../../helpers");
const IPAddress_1 = require("../../../models/IPAddress");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateIPAddress_1 = require("../../outputs/AggregateIPAddress");
const IPAddressGroupBy_1 = require("../../outputs/IPAddressGroupBy");
let IPAddressCrudResolver = class IPAddressCrudResolver {
    async iPAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).iPAddress.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstIPAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).iPAddress.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async iPAddresses(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).iPAddress.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createIPAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).iPAddress.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyIPAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).iPAddress.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteIPAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).iPAddress.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateIPAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).iPAddress.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyIPAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).iPAddress.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyIPAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).iPAddress.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertIPAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).iPAddress.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateIPAddress(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).iPAddress.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByIPAddress(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).iPAddress.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IPAddress_1.IPAddress, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueIPAddressArgs_1.FindUniqueIPAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IPAddressCrudResolver.prototype, "iPAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => IPAddress_1.IPAddress, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIPAddressArgs_1.FindFirstIPAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IPAddressCrudResolver.prototype, "findFirstIPAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [IPAddress_1.IPAddress], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyIPAddressArgs_1.FindManyIPAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IPAddressCrudResolver.prototype, "iPAddresses", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IPAddress_1.IPAddress, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateIPAddressArgs_1.CreateIPAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IPAddressCrudResolver.prototype, "createIPAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyIPAddressArgs_1.CreateManyIPAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IPAddressCrudResolver.prototype, "createManyIPAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IPAddress_1.IPAddress, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteIPAddressArgs_1.DeleteIPAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IPAddressCrudResolver.prototype, "deleteIPAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IPAddress_1.IPAddress, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateIPAddressArgs_1.UpdateIPAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IPAddressCrudResolver.prototype, "updateIPAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyIPAddressArgs_1.DeleteManyIPAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IPAddressCrudResolver.prototype, "deleteManyIPAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyIPAddressArgs_1.UpdateManyIPAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IPAddressCrudResolver.prototype, "updateManyIPAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IPAddress_1.IPAddress, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertIPAddressArgs_1.UpsertIPAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IPAddressCrudResolver.prototype, "upsertIPAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateIPAddress_1.AggregateIPAddress, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateIPAddressArgs_1.AggregateIPAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IPAddressCrudResolver.prototype, "aggregateIPAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [IPAddressGroupBy_1.IPAddressGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByIPAddressArgs_1.GroupByIPAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IPAddressCrudResolver.prototype, "groupByIPAddress", null);
IPAddressCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IPAddress_1.IPAddress)
], IPAddressCrudResolver);
exports.IPAddressCrudResolver = IPAddressCrudResolver;
