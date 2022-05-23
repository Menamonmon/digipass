"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateNestedOneWithoutPassesInput_1 = require("../inputs/ClassroomCreateNestedOneWithoutPassesInput");
const StudentCreateNestedOneWithoutPassesInput_1 = require("../inputs/StudentCreateNestedOneWithoutPassesInput");
const TeacherCreateNestedOneWithoutIssuedPassesInput_1 = require("../inputs/TeacherCreateNestedOneWithoutIssuedPassesInput");
let PassCreateInput = class PassCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateNestedOneWithoutPassesInput_1.StudentCreateNestedOneWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentCreateNestedOneWithoutPassesInput_1.StudentCreateNestedOneWithoutPassesInput)
], PassCreateInput.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateNestedOneWithoutPassesInput_1.ClassroomCreateNestedOneWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomCreateNestedOneWithoutPassesInput_1.ClassroomCreateNestedOneWithoutPassesInput)
], PassCreateInput.prototype, "classroom", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PassCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PassCreateInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PassCreateInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PassCreateInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateNestedOneWithoutIssuedPassesInput_1.TeacherCreateNestedOneWithoutIssuedPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherCreateNestedOneWithoutIssuedPassesInput_1.TeacherCreateNestedOneWithoutIssuedPassesInput)
], PassCreateInput.prototype, "issuer", void 0);
PassCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassCreateInput", {
        isAbstract: true
    })
], PassCreateInput);
exports.PassCreateInput = PassCreateInput;
