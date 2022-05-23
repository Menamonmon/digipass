"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCreateWithoutPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateNestedManyWithoutStudentsInput_1 = require("../inputs/ClassroomCreateNestedManyWithoutStudentsInput");
const IPAddressCreateNestedManyWithoutOwnerInput_1 = require("../inputs/IPAddressCreateNestedManyWithoutOwnerInput");
let StudentCreateWithoutPassesInput = class StudentCreateWithoutPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateWithoutPassesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateWithoutPassesInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateWithoutPassesInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateWithoutPassesInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], StudentCreateWithoutPassesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], StudentCreateWithoutPassesInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateWithoutPassesInput.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StudentCreateWithoutPassesInput.prototype, "passesUsed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressCreateNestedManyWithoutOwnerInput_1.IPAddressCreateNestedManyWithoutOwnerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressCreateNestedManyWithoutOwnerInput_1.IPAddressCreateNestedManyWithoutOwnerInput)
], StudentCreateWithoutPassesInput.prototype, "ipAddresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateNestedManyWithoutStudentsInput_1.ClassroomCreateNestedManyWithoutStudentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomCreateNestedManyWithoutStudentsInput_1.ClassroomCreateNestedManyWithoutStudentsInput)
], StudentCreateWithoutPassesInput.prototype, "classrooms", void 0);
StudentCreateWithoutPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentCreateWithoutPassesInput", {
        isAbstract: true
    })
], StudentCreateWithoutPassesInput);
exports.StudentCreateWithoutPassesInput = StudentCreateWithoutPassesInput;
