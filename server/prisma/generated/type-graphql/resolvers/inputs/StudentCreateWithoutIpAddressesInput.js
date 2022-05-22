"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCreateWithoutIpAddressesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateNestedManyWithoutStudentsInput_1 = require("../inputs/ClassroomCreateNestedManyWithoutStudentsInput");
const PassCreateNestedManyWithoutStudentInput_1 = require("../inputs/PassCreateNestedManyWithoutStudentInput");
let StudentCreateWithoutIpAddressesInput = class StudentCreateWithoutIpAddressesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateWithoutIpAddressesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateWithoutIpAddressesInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateWithoutIpAddressesInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateWithoutIpAddressesInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], StudentCreateWithoutIpAddressesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], StudentCreateWithoutIpAddressesInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateWithoutIpAddressesInput.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], StudentCreateWithoutIpAddressesInput.prototype, "passesUsed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateNestedManyWithoutStudentsInput_1.ClassroomCreateNestedManyWithoutStudentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomCreateNestedManyWithoutStudentsInput_1.ClassroomCreateNestedManyWithoutStudentsInput)
], StudentCreateWithoutIpAddressesInput.prototype, "classrooms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateNestedManyWithoutStudentInput_1.PassCreateNestedManyWithoutStudentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCreateNestedManyWithoutStudentInput_1.PassCreateNestedManyWithoutStudentInput)
], StudentCreateWithoutIpAddressesInput.prototype, "passes", void 0);
StudentCreateWithoutIpAddressesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentCreateWithoutIpAddressesInput", {
        isAbstract: true
    })
], StudentCreateWithoutIpAddressesInput);
exports.StudentCreateWithoutIpAddressesInput = StudentCreateWithoutIpAddressesInput;
