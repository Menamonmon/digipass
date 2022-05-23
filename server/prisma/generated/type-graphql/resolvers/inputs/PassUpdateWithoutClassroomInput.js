"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateWithoutClassroomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const StudentUpdateOneWithoutPassesInput_1 = require("../inputs/StudentUpdateOneWithoutPassesInput");
const TeacherUpdateOneWithoutIssuedPassesInput_1 = require("../inputs/TeacherUpdateOneWithoutIssuedPassesInput");
let PassUpdateWithoutClassroomInput = class PassUpdateWithoutClassroomInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateOneWithoutPassesInput_1.StudentUpdateOneWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentUpdateOneWithoutPassesInput_1.StudentUpdateOneWithoutPassesInput)
], PassUpdateWithoutClassroomInput.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutClassroomInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutClassroomInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutClassroomInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], PassUpdateWithoutClassroomInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateOneWithoutIssuedPassesInput_1.TeacherUpdateOneWithoutIssuedPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherUpdateOneWithoutIssuedPassesInput_1.TeacherUpdateOneWithoutIssuedPassesInput)
], PassUpdateWithoutClassroomInput.prototype, "issuer", void 0);
PassUpdateWithoutClassroomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateWithoutClassroomInput", {
        isAbstract: true
    })
], PassUpdateWithoutClassroomInput);
exports.PassUpdateWithoutClassroomInput = PassUpdateWithoutClassroomInput;
