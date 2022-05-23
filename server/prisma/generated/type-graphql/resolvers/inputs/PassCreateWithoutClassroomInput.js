"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassCreateWithoutClassroomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateNestedOneWithoutPassesInput_1 = require("../inputs/StudentCreateNestedOneWithoutPassesInput");
const TeacherCreateNestedOneWithoutIssuedPassesInput_1 = require("../inputs/TeacherCreateNestedOneWithoutIssuedPassesInput");
let PassCreateWithoutClassroomInput = class PassCreateWithoutClassroomInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateNestedOneWithoutPassesInput_1.StudentCreateNestedOneWithoutPassesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentCreateNestedOneWithoutPassesInput_1.StudentCreateNestedOneWithoutPassesInput)
], PassCreateWithoutClassroomInput.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PassCreateWithoutClassroomInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PassCreateWithoutClassroomInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PassCreateWithoutClassroomInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PassCreateWithoutClassroomInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateNestedOneWithoutIssuedPassesInput_1.TeacherCreateNestedOneWithoutIssuedPassesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherCreateNestedOneWithoutIssuedPassesInput_1.TeacherCreateNestedOneWithoutIssuedPassesInput)
], PassCreateWithoutClassroomInput.prototype, "issuer", void 0);
PassCreateWithoutClassroomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassCreateWithoutClassroomInput", {
        isAbstract: true
    })
], PassCreateWithoutClassroomInput);
exports.PassCreateWithoutClassroomInput = PassCreateWithoutClassroomInput;
