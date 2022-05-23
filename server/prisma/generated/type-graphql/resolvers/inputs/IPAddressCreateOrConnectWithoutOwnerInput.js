"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressCreateOrConnectWithoutOwnerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressCreateWithoutOwnerInput_1 = require("../inputs/IPAddressCreateWithoutOwnerInput");
const IPAddressWhereUniqueInput_1 = require("../inputs/IPAddressWhereUniqueInput");
let IPAddressCreateOrConnectWithoutOwnerInput = class IPAddressCreateOrConnectWithoutOwnerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput)
], IPAddressCreateOrConnectWithoutOwnerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressCreateWithoutOwnerInput_1.IPAddressCreateWithoutOwnerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressCreateWithoutOwnerInput_1.IPAddressCreateWithoutOwnerInput)
], IPAddressCreateOrConnectWithoutOwnerInput.prototype, "create", void 0);
IPAddressCreateOrConnectWithoutOwnerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressCreateOrConnectWithoutOwnerInput", {
        isAbstract: true
    })
], IPAddressCreateOrConnectWithoutOwnerInput);
exports.IPAddressCreateOrConnectWithoutOwnerInput = IPAddressCreateOrConnectWithoutOwnerInput;
