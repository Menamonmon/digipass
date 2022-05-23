"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomUpdateWithoutPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const StudentUpdateManyWithoutClassroomsInput_1 = require("../inputs/StudentUpdateManyWithoutClassroomsInput");
const TeacherUpdateOneRequiredWithoutClassroomsInput_1 = require("../inputs/TeacherUpdateOneRequiredWithoutClassroomsInput");
let ClassroomUpdateWithoutPassesInput = class ClassroomUpdateWithoutPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ClassroomUpdateWithoutPassesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ClassroomUpdateWithoutPassesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ClassroomUpdateWithoutPassesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ClassroomUpdateWithoutPassesInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ClassroomUpdateWithoutPassesInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ClassroomUpdateWithoutPassesInput.prototype, "classCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateManyWithoutClassroomsInput_1.StudentUpdateManyWithoutClassroomsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentUpdateManyWithoutClassroomsInput_1.StudentUpdateManyWithoutClassroomsInput)
], ClassroomUpdateWithoutPassesInput.prototype, "students", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateOneRequiredWithoutClassroomsInput_1.TeacherUpdateOneRequiredWithoutClassroomsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherUpdateOneRequiredWithoutClassroomsInput_1.TeacherUpdateOneRequiredWithoutClassroomsInput)
], ClassroomUpdateWithoutPassesInput.prototype, "teacher", void 0);
ClassroomUpdateWithoutPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomUpdateWithoutPassesInput", {
        isAbstract: true
    })
], ClassroomUpdateWithoutPassesInput);
exports.ClassroomUpdateWithoutPassesInput = ClassroomUpdateWithoutPassesInput;
