"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateNestedManyWithoutClassroomInput_1 = require("../inputs/PassCreateNestedManyWithoutClassroomInput");
const StudentCreateNestedManyWithoutClassroomsInput_1 = require("../inputs/StudentCreateNestedManyWithoutClassroomsInput");
const TeacherCreateNestedOneWithoutClassroomsInput_1 = require("../inputs/TeacherCreateNestedOneWithoutClassroomsInput");
let ClassroomCreateInput = class ClassroomCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomCreateInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomCreateInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomCreateInput.prototype, "classCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateNestedManyWithoutClassroomsInput_1.StudentCreateNestedManyWithoutClassroomsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentCreateNestedManyWithoutClassroomsInput_1.StudentCreateNestedManyWithoutClassroomsInput)
], ClassroomCreateInput.prototype, "students", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateNestedOneWithoutClassroomsInput_1.TeacherCreateNestedOneWithoutClassroomsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherCreateNestedOneWithoutClassroomsInput_1.TeacherCreateNestedOneWithoutClassroomsInput)
], ClassroomCreateInput.prototype, "teacher", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateNestedManyWithoutClassroomInput_1.PassCreateNestedManyWithoutClassroomInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCreateNestedManyWithoutClassroomInput_1.PassCreateNestedManyWithoutClassroomInput)
], ClassroomCreateInput.prototype, "passes", void 0);
ClassroomCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomCreateInput", {
        isAbstract: true
    })
], ClassroomCreateInput);
exports.ClassroomCreateInput = ClassroomCreateInput;
