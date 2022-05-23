"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomUpdateWithoutTeacherInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PassUpdateManyWithoutClassroomInput_1 = require("../inputs/PassUpdateManyWithoutClassroomInput");
const StudentUpdateManyWithoutClassroomsInput_1 = require("../inputs/StudentUpdateManyWithoutClassroomsInput");
let ClassroomUpdateWithoutTeacherInput = class ClassroomUpdateWithoutTeacherInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClassroomUpdateWithoutTeacherInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClassroomUpdateWithoutTeacherInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ClassroomUpdateWithoutTeacherInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ClassroomUpdateWithoutTeacherInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ClassroomUpdateWithoutTeacherInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
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
