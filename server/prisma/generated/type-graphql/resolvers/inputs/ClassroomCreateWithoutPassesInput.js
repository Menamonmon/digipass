"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomCreateWithoutPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateNestedManyWithoutClassroomsInput_1 = require("../inputs/StudentCreateNestedManyWithoutClassroomsInput");
const TeacherCreateNestedOneWithoutClassroomsInput_1 = require("../inputs/TeacherCreateNestedOneWithoutClassroomsInput");
let ClassroomCreateWithoutPassesInput = class ClassroomCreateWithoutPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomCreateWithoutPassesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomCreateWithoutPassesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomCreateWithoutPassesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomCreateWithoutPassesInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomCreateWithoutPassesInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomCreateWithoutPassesInput.prototype, "classCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateNestedManyWithoutClassroomsInput_1.StudentCreateNestedManyWithoutClassroomsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentCreateNestedManyWithoutClassroomsInput_1.StudentCreateNestedManyWithoutClassroomsInput)
], ClassroomCreateWithoutPassesInput.prototype, "students", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateNestedOneWithoutClassroomsInput_1.TeacherCreateNestedOneWithoutClassroomsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherCreateNestedOneWithoutClassroomsInput_1.TeacherCreateNestedOneWithoutClassroomsInput)
], ClassroomCreateWithoutPassesInput.prototype, "teacher", void 0);
ClassroomCreateWithoutPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomCreateWithoutPassesInput", {
        isAbstract: true
    })
], ClassroomCreateWithoutPassesInput);
exports.ClassroomCreateWithoutPassesInput = ClassroomCreateWithoutPassesInput;
