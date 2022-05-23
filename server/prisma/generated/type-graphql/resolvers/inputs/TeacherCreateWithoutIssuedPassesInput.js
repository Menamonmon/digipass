"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherCreateWithoutIssuedPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateNestedManyWithoutTeacherInput_1 = require("../inputs/ClassroomCreateNestedManyWithoutTeacherInput");
let TeacherCreateWithoutIssuedPassesInput = class TeacherCreateWithoutIssuedPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherCreateWithoutIssuedPassesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherCreateWithoutIssuedPassesInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherCreateWithoutIssuedPassesInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherCreateWithoutIssuedPassesInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeacherCreateWithoutIssuedPassesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeacherCreateWithoutIssuedPassesInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateNestedManyWithoutTeacherInput_1.ClassroomCreateNestedManyWithoutTeacherInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomCreateNestedManyWithoutTeacherInput_1.ClassroomCreateNestedManyWithoutTeacherInput)
], TeacherCreateWithoutIssuedPassesInput.prototype, "classrooms", void 0);
TeacherCreateWithoutIssuedPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherCreateWithoutIssuedPassesInput", {
        isAbstract: true
    })
], TeacherCreateWithoutIssuedPassesInput);
exports.TeacherCreateWithoutIssuedPassesInput = TeacherCreateWithoutIssuedPassesInput;
