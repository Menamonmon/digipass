"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateNestedManyWithoutTeacherInput_1 = require("../inputs/ClassroomCreateNestedManyWithoutTeacherInput");
const PassCreateNestedManyWithoutIssuerInput_1 = require("../inputs/PassCreateNestedManyWithoutIssuerInput");
let TeacherCreateInput = class TeacherCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeacherCreateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeacherCreateInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeacherCreateInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeacherCreateInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeacherCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeacherCreateInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateNestedManyWithoutTeacherInput_1.ClassroomCreateNestedManyWithoutTeacherInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomCreateNestedManyWithoutTeacherInput_1.ClassroomCreateNestedManyWithoutTeacherInput)
], TeacherCreateInput.prototype, "classrooms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateNestedManyWithoutIssuerInput_1.PassCreateNestedManyWithoutIssuerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCreateNestedManyWithoutIssuerInput_1.PassCreateNestedManyWithoutIssuerInput)
], TeacherCreateInput.prototype, "issuedPasses", void 0);
TeacherCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherCreateInput", {
        isAbstract: true
    })
], TeacherCreateInput);
exports.TeacherCreateInput = TeacherCreateInput;
