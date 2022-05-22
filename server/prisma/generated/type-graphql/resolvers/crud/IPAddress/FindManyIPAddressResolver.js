"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyIPAddressResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyIPAddressArgs_1 = require("./args/FindManyIPAddressArgs");
const IPAddress_1 = require("../../../models/IPAddress");
const helpers_1 = require("../../../helpers");
let FindManyIPAddressResolver = class FindManyIPAddressResolver {
    async iPAddresses(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).iPAddress.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyIPAddressResolver.prototype, "iPAddresses", null);
FindManyIPAddressResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IPAddress_1.IPAddress)
], FindManyIPAddressResolver);
exports.FindManyIPAddressResolver = FindManyIPAddressResolver;
