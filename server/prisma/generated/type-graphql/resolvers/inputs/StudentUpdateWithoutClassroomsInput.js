"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentUpdateWithoutClassroomsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IPAddressUpdateManyWithoutOwnerInput_1 = require("../inputs/IPAddressUpdateManyWithoutOwnerInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const PassUpdateManyWithoutStudentInput_1 = require("../inputs/PassUpdateManyWithoutStudentInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let StudentUpdateWithoutClassroomsInput = class StudentUpdateWithoutClassroomsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StudentUpdateWithoutClassroomsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StudentUpdateWithoutClassroomsInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StudentUpdateWithoutClassroomsInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StudentUpdateWithoutClassroomsInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], StudentUpdateWithoutClassroomsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], StudentUpdateWithoutClassroomsInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StudentUpdateWithoutClassroomsInput.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], StudentUpdateWithoutClassroomsInput.prototype, "passesUsed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressUpdateManyWithoutOwnerInput_1.IPAddressUpdateManyWithoutOwnerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressUpdateManyWithoutOwnerInput_1.IPAddressUpdateManyWithoutOwnerInput)
], StudentUpdateWithoutClassroomsInput.prototype, "ipAddresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateManyWithoutStudentInput_1.PassUpdateManyWithoutStudentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassUpdateManyWithoutStudentInput_1.PassUpdateManyWithoutStudentInput)
], StudentUpdateWithoutClassroomsInput.prototype, "passes", void 0);
StudentUpdateWithoutClassroomsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentUpdateWithoutClassroomsInput", {
        isAbstract: true
    })
], StudentUpdateWithoutClassroomsInput);
exports.StudentUpdateWithoutClassroomsInput = StudentUpdateWithoutClassroomsInput;
