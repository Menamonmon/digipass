"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const StudentUpdateOneRequiredWithoutIpAddressesInput_1 = require("../inputs/StudentUpdateOneRequiredWithoutIpAddressesInput");
let IPAddressUpdateInput = class IPAddressUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateOneRequiredWithoutIpAddressesInput_1.StudentUpdateOneRequiredWithoutIpAddressesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentUpdateOneRequiredWithoutIpAddressesInput_1.StudentUpdateOneRequiredWithoutIpAddressesInput)
], IPAddressUpdateInput.prototype, "owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], IPAddressUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IPAddressUpdateInput.prototype, "address", void 0);
IPAddressUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressUpdateInput", {
        isAbstract: true
    })
], IPAddressUpdateInput);
exports.IPAddressUpdateInput = IPAddressUpdateInput;
