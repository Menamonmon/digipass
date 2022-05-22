"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomUpdateWithoutStudentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PassUpdateManyWithoutClassroomInput_1 = require("../inputs/PassUpdateManyWithoutClassroomInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TeacherUpdateOneRequiredWithoutClassroomsInput_1 = require("../inputs/TeacherUpdateOneRequiredWithoutClassroomsInput");
let ClassroomUpdateWithoutStudentsInput = class ClassroomUpdateWithoutStudentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ClassroomUpdateWithoutStudentsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ClassroomUpdateWithoutStudentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ClassroomUpdateWithoutStudentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ClassroomUpdateWithoutStudentsInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ClassroomUpdateWithoutStudentsInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ClassroomUpdateWithoutStudentsInput.prototype, "classCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateOneRequiredWithoutClassroomsInput_1.TeacherUpdateOneRequiredWithoutClassroomsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherUpdateOneRequiredWithoutClassroomsInput_1.TeacherUpdateOneRequiredWithoutClassroomsInput)
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
