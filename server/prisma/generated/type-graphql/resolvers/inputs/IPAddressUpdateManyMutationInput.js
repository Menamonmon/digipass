"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let IPAddressUpdateManyMutationInput = class IPAddressUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], IPAddressUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IPAddressUpdateManyMutationInput.prototype, "address", void 0);
IPAddressUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressUpdateManyMutationInput", {
        isAbstract: true
    })
], IPAddressUpdateManyMutationInput);
exports.IPAddressUpdateManyMutationInput = IPAddressUpdateManyMutationInput;
