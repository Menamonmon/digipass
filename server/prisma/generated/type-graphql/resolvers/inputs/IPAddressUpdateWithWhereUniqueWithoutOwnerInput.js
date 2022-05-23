"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressUpdateWithWhereUniqueWithoutOwnerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressUpdateWithoutOwnerInput_1 = require("../inputs/IPAddressUpdateWithoutOwnerInput");
const IPAddressWhereUniqueInput_1 = require("../inputs/IPAddressWhereUniqueInput");
let IPAddressUpdateWithWhereUniqueWithoutOwnerInput = class IPAddressUpdateWithWhereUniqueWithoutOwnerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput)
], IPAddressUpdateWithWhereUniqueWithoutOwnerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressUpdateWithoutOwnerInput_1.IPAddressUpdateWithoutOwnerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressUpdateWithoutOwnerInput_1.IPAddressUpdateWithoutOwnerInput)
], IPAddressUpdateWithWhereUniqueWithoutOwnerInput.prototype, "data", void 0);
IPAddressUpdateWithWhereUniqueWithoutOwnerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressUpdateWithWhereUniqueWithoutOwnerInput", {
        isAbstract: true
    })
], IPAddressUpdateWithWhereUniqueWithoutOwnerInput);
exports.IPAddressUpdateWithWhereUniqueWithoutOwnerInput = IPAddressUpdateWithWhereUniqueWithoutOwnerInput;
