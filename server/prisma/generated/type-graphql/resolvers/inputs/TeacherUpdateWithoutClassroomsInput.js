"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherUpdateWithoutClassroomsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PassUpdateManyWithoutIssuerInput_1 = require("../inputs/PassUpdateManyWithoutIssuerInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TeacherUpdateWithoutClassroomsInput = class TeacherUpdateWithoutClassroomsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeacherUpdateWithoutClassroomsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeacherUpdateWithoutClassroomsInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeacherUpdateWithoutClassroomsInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeacherUpdateWithoutClassroomsInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TeacherUpdateWithoutClassroomsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TeacherUpdateWithoutClassroomsInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateManyWithoutIssuerInput_1.PassUpdateManyWithoutIssuerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassUpdateManyWithoutIssuerInput_1.PassUpdateManyWithoutIssuerInput)
], TeacherUpdateWithoutClassroomsInput.prototype, "issuedPasses", void 0);
TeacherUpdateWithoutClassroomsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherUpdateWithoutClassroomsInput", {
        isAbstract: true
    })
], TeacherUpdateWithoutClassroomsInput);
exports.TeacherUpdateWithoutClassroomsInput = TeacherUpdateWithoutClassroomsInput;
