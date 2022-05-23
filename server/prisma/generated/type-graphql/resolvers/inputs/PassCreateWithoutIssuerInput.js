"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassCreateWithoutIssuerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateNestedOneWithoutPassesInput_1 = require("../inputs/ClassroomCreateNestedOneWithoutPassesInput");
const StudentCreateNestedOneWithoutPassesInput_1 = require("../inputs/StudentCreateNestedOneWithoutPassesInput");
let PassCreateWithoutIssuerInput = class PassCreateWithoutIssuerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateNestedOneWithoutPassesInput_1.StudentCreateNestedOneWithoutPassesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentCreateNestedOneWithoutPassesInput_1.StudentCreateNestedOneWithoutPassesInput)
], PassCreateWithoutIssuerInput.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateNestedOneWithoutPassesInput_1.ClassroomCreateNestedOneWithoutPassesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomCreateNestedOneWithoutPassesInput_1.ClassroomCreateNestedOneWithoutPassesInput)
], PassCreateWithoutIssuerInput.prototype, "classroom", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PassCreateWithoutIssuerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PassCreateWithoutIssuerInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PassCreateWithoutIssuerInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PassCreateWithoutIssuerInput.prototype, "duration", void 0);
PassCreateWithoutIssuerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassCreateWithoutIssuerInput", {
        isAbstract: true
    })
], PassCreateWithoutIssuerInput);
exports.PassCreateWithoutIssuerInput = PassCreateWithoutIssuerInput;
