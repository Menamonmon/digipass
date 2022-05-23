"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddress_1 = require("../../../models/IPAddress");
const Student_1 = require("../../../models/Student");
const helpers_1 = require("../../../helpers");
let IPAddressRelationsResolver = class IPAddressRelationsResolver {
    async owner(iPAddress, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).iPAddress.findUnique({
            where: {
                id: iPAddress.id,
            },
        }).owner({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Student_1.Student, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IPAddress_1.IPAddress, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IPAddressRelationsResolver.prototype, "owner", null);
IPAddressRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IPAddress_1.IPAddress)
], IPAddressRelationsResolver);
exports.IPAddressRelationsResolver = IPAddressRelationsResolver;
