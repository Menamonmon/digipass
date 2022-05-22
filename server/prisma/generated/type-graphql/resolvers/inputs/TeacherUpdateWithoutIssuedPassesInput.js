"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherUpdateWithoutIssuedPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomUpdateManyWithoutTeacherInput_1 = require("../inputs/ClassroomUpdateManyWithoutTeacherInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TeacherUpdateWithoutIssuedPassesInput = class TeacherUpdateWithoutIssuedPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeacherUpdateWithoutIssuedPassesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeacherUpdateWithoutIssuedPassesInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeacherUpdateWithoutIssuedPassesInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeacherUpdateWithoutIssuedPassesInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TeacherUpdateWithoutIssuedPassesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TeacherUpdateWithoutIssuedPassesInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateManyWithoutTeacherInput_1.ClassroomUpdateManyWithoutTeacherInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateManyWithoutTeacherInput_1.ClassroomUpdateManyWithoutTeacherInput)
], TeacherUpdateWithoutIssuedPassesInput.prototype, "classrooms", void 0);
TeacherUpdateWithoutIssuedPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherUpdateWithoutIssuedPassesInput", {
        isAbstract: true
    })
], TeacherUpdateWithoutIssuedPassesInput);
exports.TeacherUpdateWithoutIssuedPassesInput = TeacherUpdateWithoutIssuedPassesInput;
