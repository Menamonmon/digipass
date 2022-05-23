"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StudentUpdateOneWithoutIpAddressesInput_1 = require("../inputs/StudentUpdateOneWithoutIpAddressesInput");
let IPAddressUpdateInput = class IPAddressUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateOneWithoutIpAddressesInput_1.StudentUpdateOneWithoutIpAddressesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentUpdateOneWithoutIpAddressesInput_1.StudentUpdateOneWithoutIpAddressesInput)
], IPAddressUpdateInput.prototype, "owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], IPAddressUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], IPAddressUpdateInput.prototype, "address", void 0);
IPAddressUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressUpdateInput", {
        isAbstract: true
    })
], IPAddressUpdateInput);
exports.IPAddressUpdateInput = IPAddressUpdateInput;
