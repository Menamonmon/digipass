"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressUpsertWithWhereUniqueWithoutOwnerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressCreateWithoutOwnerInput_1 = require("../inputs/IPAddressCreateWithoutOwnerInput");
const IPAddressUpdateWithoutOwnerInput_1 = require("../inputs/IPAddressUpdateWithoutOwnerInput");
const IPAddressWhereUniqueInput_1 = require("../inputs/IPAddressWhereUniqueInput");
let IPAddressUpsertWithWhereUniqueWithoutOwnerInput = class IPAddressUpsertWithWhereUniqueWithoutOwnerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput)
], IPAddressUpsertWithWhereUniqueWithoutOwnerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressUpdateWithoutOwnerInput_1.IPAddressUpdateWithoutOwnerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressUpdateWithoutOwnerInput_1.IPAddressUpdateWithoutOwnerInput)
], IPAddressUpsertWithWhereUniqueWithoutOwnerInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressCreateWithoutOwnerInput_1.IPAddressCreateWithoutOwnerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressCreateWithoutOwnerInput_1.IPAddressCreateWithoutOwnerInput)
], IPAddressUpsertWithWhereUniqueWithoutOwnerInput.prototype, "create", void 0);
IPAddressUpsertWithWhereUniqueWithoutOwnerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressUpsertWithWhereUniqueWithoutOwnerInput", {
        isAbstract: true
    })
], IPAddressUpsertWithWhereUniqueWithoutOwnerInput);
exports.IPAddressUpsertWithWhereUniqueWithoutOwnerInput = IPAddressUpsertWithWhereUniqueWithoutOwnerInput;
