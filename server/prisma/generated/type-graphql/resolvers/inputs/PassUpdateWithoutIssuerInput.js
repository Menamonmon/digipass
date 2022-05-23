"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateWithoutIssuerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomUpdateOneWithoutPassesInput_1 = require("../inputs/ClassroomUpdateOneWithoutPassesInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const StudentUpdateOneWithoutPassesInput_1 = require("../inputs/StudentUpdateOneWithoutPassesInput");
let PassUpdateWithoutIssuerInput = class PassUpdateWithoutIssuerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateOneWithoutPassesInput_1.StudentUpdateOneWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentUpdateOneWithoutPassesInput_1.StudentUpdateOneWithoutPassesInput)
], PassUpdateWithoutIssuerInput.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateOneWithoutPassesInput_1.ClassroomUpdateOneWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateOneWithoutPassesInput_1.ClassroomUpdateOneWithoutPassesInput)
], PassUpdateWithoutIssuerInput.prototype, "classroom", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutIssuerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutIssuerInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutIssuerInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], PassUpdateWithoutIssuerInput.prototype, "duration", void 0);
PassUpdateWithoutIssuerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateWithoutIssuerInput", {
        isAbstract: true
    })
], PassUpdateWithoutIssuerInput);
exports.PassUpdateWithoutIssuerInput = PassUpdateWithoutIssuerInput;
