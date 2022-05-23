"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var IPAddressScalarFieldEnum;
(function (IPAddressScalarFieldEnum) {
    IPAddressScalarFieldEnum["id"] = "id";
    IPAddressScalarFieldEnum["ownerId"] = "ownerId";
    IPAddressScalarFieldEnum["createdAt"] = "createdAt";
    IPAddressScalarFieldEnum["address"] = "address";
})(IPAddressScalarFieldEnum = exports.IPAddressScalarFieldEnum || (exports.IPAddressScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(IPAddressScalarFieldEnum, {
    name: "IPAddressScalarFieldEnum",
    description: undefined,
});
