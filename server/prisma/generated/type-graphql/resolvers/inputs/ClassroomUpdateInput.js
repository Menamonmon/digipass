"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PassUpdateManyWithoutClassroomInput_1 = require("../inputs/PassUpdateManyWithoutClassroomInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const StudentUpdateManyWithoutClassroomsInput_1 = require("../inputs/StudentUpdateManyWithoutClassroomsInput");
const TeacherUpdateOneRequiredWithoutClassroomsInput_1 = require("../inputs/TeacherUpdateOneRequiredWithoutClassroomsInput");
let ClassroomUpdateInput = class ClassroomUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ClassroomUpdateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ClassroomUpdateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ClassroomUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ClassroomUpdateInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ClassroomUpdateInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ClassroomUpdateInput.prototype, "classCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateManyWithoutClassroomsInput_1.StudentUpdateManyWithoutClassroomsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentUpdateManyWithoutClassroomsInput_1.StudentUpdateManyWithoutClassroomsInput)
], ClassroomUpdateInput.prototype, "students", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateOneRequiredWithoutClassroomsInput_1.TeacherUpdateOneRequiredWithoutClassroomsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherUpdateOneRequiredWithoutClassroomsInput_1.TeacherUpdateOneRequiredWithoutClassroomsInput)
], ClassroomUpdateInput.prototype, "teacher", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateManyWithoutClassroomInput_1.PassUpdateManyWithoutClassroomInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassUpdateManyWithoutClassroomInput_1.PassUpdateManyWithoutClassroomInput)
], ClassroomUpdateInput.prototype, "passes", void 0);
ClassroomUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomUpdateInput", {
        isAbstract: true
    })
], ClassroomUpdateInput);
exports.ClassroomUpdateInput = ClassroomUpdateInput;
