"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomCreateWithoutStudentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateNestedManyWithoutClassroomInput_1 = require("../inputs/PassCreateNestedManyWithoutClassroomInput");
const TeacherCreateNestedOneWithoutClassroomsInput_1 = require("../inputs/TeacherCreateNestedOneWithoutClassroomsInput");
let ClassroomCreateWithoutStudentsInput = class ClassroomCreateWithoutStudentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomCreateWithoutStudentsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomCreateWithoutStudentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomCreateWithoutStudentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomCreateWithoutStudentsInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomCreateWithoutStudentsInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomCreateWithoutStudentsInput.prototype, "classCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateNestedOneWithoutClassroomsInput_1.TeacherCreateNestedOneWithoutClassroomsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherCreateNestedOneWithoutClassroomsInput_1.TeacherCreateNestedOneWithoutClassroomsInput)
], ClassroomCreateWithoutStudentsInput.prototype, "teacher", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateNestedManyWithoutClassroomInput_1.PassCreateNestedManyWithoutClassroomInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCreateNestedManyWithoutClassroomInput_1.PassCreateNestedManyWithoutClassroomInput)
], ClassroomCreateWithoutStudentsInput.prototype, "passes", void 0);
ClassroomCreateWithoutStudentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomCreateWithoutStudentsInput", {
        isAbstract: true
    })
], ClassroomCreateWithoutStudentsInput);
exports.ClassroomCreateWithoutStudentsInput = ClassroomCreateWithoutStudentsInput;
