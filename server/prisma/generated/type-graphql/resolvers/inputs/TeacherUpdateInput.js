"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomUpdateManyWithoutTeacherInput_1 = require("../inputs/ClassroomUpdateManyWithoutTeacherInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PassUpdateManyWithoutIssuerInput_1 = require("../inputs/PassUpdateManyWithoutIssuerInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TeacherUpdateInput = class TeacherUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeacherUpdateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeacherUpdateInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeacherUpdateInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeacherUpdateInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TeacherUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TeacherUpdateInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateManyWithoutTeacherInput_1.ClassroomUpdateManyWithoutTeacherInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateManyWithoutTeacherInput_1.ClassroomUpdateManyWithoutTeacherInput)
], TeacherUpdateInput.prototype, "classrooms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateManyWithoutIssuerInput_1.PassUpdateManyWithoutIssuerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassUpdateManyWithoutIssuerInput_1.PassUpdateManyWithoutIssuerInput)
], TeacherUpdateInput.prototype, "issuedPasses", void 0);
TeacherUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherUpdateInput", {
        isAbstract: true
    })
], TeacherUpdateInput);
exports.TeacherUpdateInput = TeacherUpdateInput;
