"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomUpdateWithoutStudentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PassUpdateManyWithoutClassroomInput_1 = require("../inputs/PassUpdateManyWithoutClassroomInput");
const TeacherUpdateOneWithoutClassroomsInput_1 = require("../inputs/TeacherUpdateOneWithoutClassroomsInput");
let ClassroomUpdateWithoutStudentsInput = class ClassroomUpdateWithoutStudentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClassroomUpdateWithoutStudentsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClassroomUpdateWithoutStudentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ClassroomUpdateWithoutStudentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ClassroomUpdateWithoutStudentsInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ClassroomUpdateWithoutStudentsInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClassroomUpdateWithoutStudentsInput.prototype, "classCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateOneWithoutClassroomsInput_1.TeacherUpdateOneWithoutClassroomsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherUpdateOneWithoutClassroomsInput_1.TeacherUpdateOneWithoutClassroomsInput)
], ClassroomUpdateWithoutStudentsInput.prototype, "teacher", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateManyWithoutClassroomInput_1.PassUpdateManyWithoutClassroomInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassUpdateManyWithoutClassroomInput_1.PassUpdateManyWithoutClassroomInput)
], ClassroomUpdateWithoutStudentsInput.prototype, "passes", void 0);
ClassroomUpdateWithoutStudentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomUpdateWithoutStudentsInput", {
        isAbstract: true
    })
], ClassroomUpdateWithoutStudentsInput);
exports.ClassroomUpdateWithoutStudentsInput = ClassroomUpdateWithoutStudentsInput;
