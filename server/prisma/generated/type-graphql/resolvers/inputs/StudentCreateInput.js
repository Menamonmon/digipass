"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateNestedManyWithoutStudentsInput_1 = require("../inputs/ClassroomCreateNestedManyWithoutStudentsInput");
const IPAddressCreateNestedManyWithoutOwnerInput_1 = require("../inputs/IPAddressCreateNestedManyWithoutOwnerInput");
const PassCreateNestedManyWithoutStudentInput_1 = require("../inputs/PassCreateNestedManyWithoutStudentInput");
let StudentCreateInput = class StudentCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], StudentCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], StudentCreateInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateInput.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StudentCreateInput.prototype, "passesUsed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressCreateNestedManyWithoutOwnerInput_1.IPAddressCreateNestedManyWithoutOwnerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressCreateNestedManyWithoutOwnerInput_1.IPAddressCreateNestedManyWithoutOwnerInput)
], StudentCreateInput.prototype, "ipAddresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateNestedManyWithoutStudentsInput_1.ClassroomCreateNestedManyWithoutStudentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomCreateNestedManyWithoutStudentsInput_1.ClassroomCreateNestedManyWithoutStudentsInput)
], StudentCreateInput.prototype, "classrooms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateNestedManyWithoutStudentInput_1.PassCreateNestedManyWithoutStudentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCreateNestedManyWithoutStudentInput_1.PassCreateNestedManyWithoutStudentInput)
], StudentCreateInput.prototype, "passes", void 0);
StudentCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentCreateInput", {
        isAbstract: true
    })
], StudentCreateInput);
exports.StudentCreateInput = StudentCreateInput;
