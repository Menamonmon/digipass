"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomUpdateWithoutTeacherInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PassUpdateManyWithoutClassroomInput_1 = require("../inputs/PassUpdateManyWithoutClassroomInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const StudentUpdateManyWithoutClassroomsInput_1 = require("../inputs/StudentUpdateManyWithoutClassroomsInput");
let ClassroomUpdateWithoutTeacherInput = class ClassroomUpdateWithoutTeacherInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ClassroomUpdateWithoutTeacherInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ClassroomUpdateWithoutTeacherInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ClassroomUpdateWithoutTeacherInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ClassroomUpdateWithoutTeacherInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ClassroomUpdateWithoutTeacherInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ClassroomUpdateWithoutTeacherInput.prototype, "classCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateManyWithoutClassroomsInput_1.StudentUpdateManyWithoutClassroomsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentUpdateManyWithoutClassroomsInput_1.StudentUpdateManyWithoutClassroomsInput)
], ClassroomUpdateWithoutTeacherInput.prototype, "students", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateManyWithoutClassroomInput_1.PassUpdateManyWithoutClassroomInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassUpdateManyWithoutClassroomInput_1.PassUpdateManyWithoutClassroomInput)
], ClassroomUpdateWithoutTeacherInput.prototype, "passes", void 0);
ClassroomUpdateWithoutTeacherInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomUpdateWithoutTeacherInput", {
        isAbstract: true
    })
], ClassroomUpdateWithoutTeacherInput);
exports.ClassroomUpdateWithoutTeacherInput = ClassroomUpdateWithoutTeacherInput;
