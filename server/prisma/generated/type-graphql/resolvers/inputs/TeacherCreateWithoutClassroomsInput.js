"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherCreateWithoutClassroomsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateNestedManyWithoutIssuerInput_1 = require("../inputs/PassCreateNestedManyWithoutIssuerInput");
let TeacherCreateWithoutClassroomsInput = class TeacherCreateWithoutClassroomsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherCreateWithoutClassroomsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherCreateWithoutClassroomsInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherCreateWithoutClassroomsInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherCreateWithoutClassroomsInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeacherCreateWithoutClassroomsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeacherCreateWithoutClassroomsInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateNestedManyWithoutIssuerInput_1.PassCreateNestedManyWithoutIssuerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCreateNestedManyWithoutIssuerInput_1.PassCreateNestedManyWithoutIssuerInput)
], TeacherCreateWithoutClassroomsInput.prototype, "issuedPasses", void 0);
TeacherCreateWithoutClassroomsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherCreateWithoutClassroomsInput", {
        isAbstract: true
    })
], TeacherCreateWithoutClassroomsInput);
exports.TeacherCreateWithoutClassroomsInput = TeacherCreateWithoutClassroomsInput;
