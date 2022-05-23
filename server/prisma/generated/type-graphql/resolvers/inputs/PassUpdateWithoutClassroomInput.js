"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateWithoutClassroomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StudentUpdateOneRequiredWithoutPassesInput_1 = require("../inputs/StudentUpdateOneRequiredWithoutPassesInput");
const TeacherUpdateOneRequiredWithoutIssuedPassesInput_1 = require("../inputs/TeacherUpdateOneRequiredWithoutIssuedPassesInput");
let PassUpdateWithoutClassroomInput = class PassUpdateWithoutClassroomInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateOneRequiredWithoutPassesInput_1.StudentUpdateOneRequiredWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentUpdateOneRequiredWithoutPassesInput_1.StudentUpdateOneRequiredWithoutPassesInput)
], PassUpdateWithoutClassroomInput.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutClassroomInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutClassroomInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutClassroomInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PassUpdateWithoutClassroomInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateOneRequiredWithoutIssuedPassesInput_1.TeacherUpdateOneRequiredWithoutIssuedPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherUpdateOneRequiredWithoutIssuedPassesInput_1.TeacherUpdateOneRequiredWithoutIssuedPassesInput)
], PassUpdateWithoutClassroomInput.prototype, "issuer", void 0);
PassUpdateWithoutClassroomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateWithoutClassroomInput", {
        isAbstract: true
    })
], PassUpdateWithoutClassroomInput);
exports.PassUpdateWithoutClassroomInput = PassUpdateWithoutClassroomInput;
