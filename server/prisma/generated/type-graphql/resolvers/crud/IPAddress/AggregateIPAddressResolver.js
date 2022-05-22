"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIPAddressResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateIPAddressArgs_1 = require("./args/AggregateIPAddressArgs");
const IPAddress_1 = require("../../../models/IPAddress");
const AggregateIPAddress_1 = require("../../outputs/AggregateIPAddress");
const helpers_1 = require("../../../helpers");
let AggregateIPAddressResolver = class AggregateIPAddressResolver {
    async aggregateIPAddress(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).iPAddress.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
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
], AggregateIPAddressResolver.prototype, "aggregateIPAddress", null);
AggregateIPAddressResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IPAddress_1.IPAddress)
], AggregateIPAddressResolver);
exports.AggregateIPAddressResolver = AggregateIPAddressResolver;
