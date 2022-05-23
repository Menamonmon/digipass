"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateWithoutStudentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomUpdateOneWithoutPassesInput_1 = require("../inputs/ClassroomUpdateOneWithoutPassesInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const TeacherUpdateOneWithoutIssuedPassesInput_1 = require("../inputs/TeacherUpdateOneWithoutIssuedPassesInput");
let PassUpdateWithoutStudentInput = class PassUpdateWithoutStudentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateOneWithoutPassesInput_1.ClassroomUpdateOneWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateOneWithoutPassesInput_1.ClassroomUpdateOneWithoutPassesInput)
], PassUpdateWithoutStudentInput.prototype, "classroom", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutStudentInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutStudentInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutStudentInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], PassUpdateWithoutStudentInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateOneWithoutIssuedPassesInput_1.TeacherUpdateOneWithoutIssuedPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherUpdateOneWithoutIssuedPassesInput_1.TeacherUpdateOneWithoutIssuedPassesInput)
], PassUpdateWithoutStudentInput.prototype, "issuer", void 0);
PassUpdateWithoutStudentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateWithoutStudentInput", {
        isAbstract: true
    })
], PassUpdateWithoutStudentInput);
exports.PassUpdateWithoutStudentInput = PassUpdateWithoutStudentInput;
