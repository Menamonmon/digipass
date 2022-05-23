"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressUpdateWithoutOwnerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let IPAddressUpdateWithoutOwnerInput = class IPAddressUpdateWithoutOwnerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], IPAddressUpdateWithoutOwnerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], IPAddressUpdateWithoutOwnerInput.prototype, "address", void 0);
IPAddressUpdateWithoutOwnerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressUpdateWithoutOwnerInput", {
        isAbstract: true
    })
], IPAddressUpdateWithoutOwnerInput);
exports.IPAddressUpdateWithoutOwnerInput = IPAddressUpdateWithoutOwnerInput;
