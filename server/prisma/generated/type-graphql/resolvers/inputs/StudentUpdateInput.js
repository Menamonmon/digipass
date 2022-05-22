"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomUpdateManyWithoutStudentsInput_1 = require("../inputs/ClassroomUpdateManyWithoutStudentsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IPAddressUpdateManyWithoutOwnerInput_1 = require("../inputs/IPAddressUpdateManyWithoutOwnerInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const PassUpdateManyWithoutStudentInput_1 = require("../inputs/PassUpdateManyWithoutStudentInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let StudentUpdateInput = class StudentUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StudentUpdateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StudentUpdateInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StudentUpdateInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StudentUpdateInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], StudentUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], StudentUpdateInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StudentUpdateInput.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], StudentUpdateInput.prototype, "passesUsed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressUpdateManyWithoutOwnerInput_1.IPAddressUpdateManyWithoutOwnerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressUpdateManyWithoutOwnerInput_1.IPAddressUpdateManyWithoutOwnerInput)
], StudentUpdateInput.prototype, "ipAddresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateManyWithoutStudentsInput_1.ClassroomUpdateManyWithoutStudentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateManyWithoutStudentsInput_1.ClassroomUpdateManyWithoutStudentsInput)
], StudentUpdateInput.prototype, "classrooms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateManyWithoutStudentInput_1.PassUpdateManyWithoutStudentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassUpdateManyWithoutStudentInput_1.PassUpdateManyWithoutStudentInput)
], StudentUpdateInput.prototype, "passes", void 0);
StudentUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentUpdateInput", {
        isAbstract: true
    })
], StudentUpdateInput);
exports.StudentUpdateInput = StudentUpdateInput;
