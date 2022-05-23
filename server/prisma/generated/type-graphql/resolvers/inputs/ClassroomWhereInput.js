"use strict";
var ClassroomWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const PassListRelationFilter_1 = require("../inputs/PassListRelationFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StudentListRelationFilter_1 = require("../inputs/StudentListRelationFilter");
const TeacherRelationFilter_1 = require("../inputs/TeacherRelationFilter");
let ClassroomWhereInput = ClassroomWhereInput_1 = class ClassroomWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ClassroomWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClassroomWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClassroomWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ClassroomWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ClassroomWhereInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ClassroomWhereInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClassroomWhereInput.prototype, "classCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentListRelationFilter_1.StudentListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentListRelationFilter_1.StudentListRelationFilter)
], ClassroomWhereInput.prototype, "students", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherRelationFilter_1.TeacherRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherRelationFilter_1.TeacherRelationFilter)
], ClassroomWhereInput.prototype, "teacher", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], ClassroomWhereInput.prototype, "teacherId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassListRelationFilter_1.PassListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassListRelationFilter_1.PassListRelationFilter)
], ClassroomWhereInput.prototype, "passes", void 0);
ClassroomWhereInput = ClassroomWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomWhereInput", {
        isAbstract: true
    })
], ClassroomWhereInput);
exports.ClassroomWhereInput = ClassroomWhereInput;
