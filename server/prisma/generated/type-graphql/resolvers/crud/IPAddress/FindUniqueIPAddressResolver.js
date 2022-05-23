"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueIPAddressResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueIPAddressArgs_1 = require("./args/FindUniqueIPAddressArgs");
const IPAddress_1 = require("../../../models/IPAddress");
const helpers_1 = require("../../../helpers");
let FindUniqueIPAddressResolver = class FindUniqueIPAddressResolver {
    async iPAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).iPAddress.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], FindUniqueIPAddressResolver.prototype, "iPAddress", null);
FindUniqueIPAddressResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IPAddress_1.IPAddress)
], FindUniqueIPAddressResolver);
exports.FindUniqueIPAddressResolver = FindUniqueIPAddressResolver;
