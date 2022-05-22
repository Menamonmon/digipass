"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressUpdateManyWithWhereWithoutOwnerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressScalarWhereInput_1 = require("../inputs/IPAddressScalarWhereInput");
const IPAddressUpdateManyMutationInput_1 = require("../inputs/IPAddressUpdateManyMutationInput");
let IPAddressUpdateManyWithWhereWithoutOwnerInput = class IPAddressUpdateManyWithWhereWithoutOwnerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressScalarWhereInput_1.IPAddressScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressScalarWhereInput_1.IPAddressScalarWhereInput)
], IPAddressUpdateManyWithWhereWithoutOwnerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressUpdateManyMutationInput_1.IPAddressUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressUpdateManyMutationInput_1.IPAddressUpdateManyMutationInput)
], IPAddressUpdateManyWithWhereWithoutOwnerInput.prototype, "data", void 0);
IPAddressUpdateManyWithWhereWithoutOwnerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressUpdateManyWithWhereWithoutOwnerInput", {
        isAbstract: true
    })
], IPAddressUpdateManyWithWhereWithoutOwnerInput);
exports.IPAddressUpdateManyWithWhereWithoutOwnerInput = IPAddressUpdateManyWithWhereWithoutOwnerInput;
