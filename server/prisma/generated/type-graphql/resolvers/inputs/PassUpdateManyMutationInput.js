"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
let PassUpdateManyMutationInput = class PassUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PassUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PassUpdateManyMutationInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PassUpdateManyMutationInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PassUpdateManyMutationInput.prototype, "duration", void 0);
PassUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateManyMutationInput", {
        isAbstract: true
    })
], PassUpdateManyMutationInput);
exports.PassUpdateManyMutationInput = PassUpdateManyMutationInput;
