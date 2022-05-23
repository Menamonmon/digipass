"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let IPAddressUpdateManyMutationInput = class IPAddressUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], IPAddressUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], IPAddressUpdateManyMutationInput.prototype, "address", void 0);
IPAddressUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressUpdateManyMutationInput", {
        isAbstract: true
    })
], IPAddressUpdateManyMutationInput);
exports.IPAddressUpdateManyMutationInput = IPAddressUpdateManyMutationInput;
