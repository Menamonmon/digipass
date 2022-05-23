"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateWithoutIssuerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomUpdateOneRequiredWithoutPassesInput_1 = require("../inputs/ClassroomUpdateOneRequiredWithoutPassesInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StudentUpdateOneRequiredWithoutPassesInput_1 = require("../inputs/StudentUpdateOneRequiredWithoutPassesInput");
let PassUpdateWithoutIssuerInput = class PassUpdateWithoutIssuerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateOneRequiredWithoutPassesInput_1.StudentUpdateOneRequiredWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentUpdateOneRequiredWithoutPassesInput_1.StudentUpdateOneRequiredWithoutPassesInput)
], PassUpdateWithoutIssuerInput.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateOneRequiredWithoutPassesInput_1.ClassroomUpdateOneRequiredWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateOneRequiredWithoutPassesInput_1.ClassroomUpdateOneRequiredWithoutPassesInput)
], PassUpdateWithoutIssuerInput.prototype, "classroom", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutIssuerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutIssuerInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutIssuerInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PassUpdateWithoutIssuerInput.prototype, "duration", void 0);
PassUpdateWithoutIssuerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateWithoutIssuerInput", {
        isAbstract: true
    })
], PassUpdateWithoutIssuerInput);
exports.PassUpdateWithoutIssuerInput = PassUpdateWithoutIssuerInput;
