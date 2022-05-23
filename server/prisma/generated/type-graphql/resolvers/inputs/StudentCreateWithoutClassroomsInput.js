"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCreateWithoutClassroomsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressCreateNestedManyWithoutOwnerInput_1 = require("../inputs/IPAddressCreateNestedManyWithoutOwnerInput");
const PassCreateNestedManyWithoutStudentInput_1 = require("../inputs/PassCreateNestedManyWithoutStudentInput");
let StudentCreateWithoutClassroomsInput = class StudentCreateWithoutClassroomsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateWithoutClassroomsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateWithoutClassroomsInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateWithoutClassroomsInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateWithoutClassroomsInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], StudentCreateWithoutClassroomsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], StudentCreateWithoutClassroomsInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentCreateWithoutClassroomsInput.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StudentCreateWithoutClassroomsInput.prototype, "passesUsed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressCreateNestedManyWithoutOwnerInput_1.IPAddressCreateNestedManyWithoutOwnerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressCreateNestedManyWithoutOwnerInput_1.IPAddressCreateNestedManyWithoutOwnerInput)
], StudentCreateWithoutClassroomsInput.prototype, "ipAddresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateNestedManyWithoutStudentInput_1.PassCreateNestedManyWithoutStudentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCreateNestedManyWithoutStudentInput_1.PassCreateNestedManyWithoutStudentInput)
], StudentCreateWithoutClassroomsInput.prototype, "passes", void 0);
StudentCreateWithoutClassroomsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentCreateWithoutClassroomsInput", {
        isAbstract: true
    })
], StudentCreateWithoutClassroomsInput);
exports.StudentCreateWithoutClassroomsInput = StudentCreateWithoutClassroomsInput;
