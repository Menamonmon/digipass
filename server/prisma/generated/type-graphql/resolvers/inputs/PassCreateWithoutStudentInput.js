"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassCreateWithoutStudentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateNestedOneWithoutPassesInput_1 = require("../inputs/ClassroomCreateNestedOneWithoutPassesInput");
const TeacherCreateNestedOneWithoutIssuedPassesInput_1 = require("../inputs/TeacherCreateNestedOneWithoutIssuedPassesInput");
let PassCreateWithoutStudentInput = class PassCreateWithoutStudentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateNestedOneWithoutPassesInput_1.ClassroomCreateNestedOneWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomCreateNestedOneWithoutPassesInput_1.ClassroomCreateNestedOneWithoutPassesInput)
], PassCreateWithoutStudentInput.prototype, "classroom", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PassCreateWithoutStudentInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PassCreateWithoutStudentInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PassCreateWithoutStudentInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PassCreateWithoutStudentInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateNestedOneWithoutIssuedPassesInput_1.TeacherCreateNestedOneWithoutIssuedPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherCreateNestedOneWithoutIssuedPassesInput_1.TeacherCreateNestedOneWithoutIssuedPassesInput)
], PassCreateWithoutStudentInput.prototype, "issuer", void 0);
PassCreateWithoutStudentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassCreateWithoutStudentInput", {
        isAbstract: true
    })
], PassCreateWithoutStudentInput);
exports.PassCreateWithoutStudentInput = PassCreateWithoutStudentInput;
