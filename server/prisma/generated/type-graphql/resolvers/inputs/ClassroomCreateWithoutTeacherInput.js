"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomCreateWithoutTeacherInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateNestedManyWithoutClassroomInput_1 = require("../inputs/PassCreateNestedManyWithoutClassroomInput");
const StudentCreateNestedManyWithoutClassroomsInput_1 = require("../inputs/StudentCreateNestedManyWithoutClassroomsInput");
let ClassroomCreateWithoutTeacherInput = class ClassroomCreateWithoutTeacherInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomCreateWithoutTeacherInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomCreateWithoutTeacherInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomCreateWithoutTeacherInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomCreateWithoutTeacherInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomCreateWithoutTeacherInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomCreateWithoutTeacherInput.prototype, "classCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateNestedManyWithoutClassroomsInput_1.StudentCreateNestedManyWithoutClassroomsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentCreateNestedManyWithoutClassroomsInput_1.StudentCreateNestedManyWithoutClassroomsInput)
], ClassroomCreateWithoutTeacherInput.prototype, "students", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateNestedManyWithoutClassroomInput_1.PassCreateNestedManyWithoutClassroomInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCreateNestedManyWithoutClassroomInput_1.PassCreateNestedManyWithoutClassroomInput)
], ClassroomCreateWithoutTeacherInput.prototype, "passes", void 0);
ClassroomCreateWithoutTeacherInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomCreateWithoutTeacherInput", {
        isAbstract: true
    })
], ClassroomCreateWithoutTeacherInput);
exports.ClassroomCreateWithoutTeacherInput = ClassroomCreateWithoutTeacherInput;
