"use strict";
var TeacherWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomListRelationFilter_1 = require("../inputs/ClassroomListRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const PassListRelationFilter_1 = require("../inputs/PassListRelationFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let TeacherWhereInput = TeacherWhereInput_1 = class TeacherWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeacherWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeacherWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeacherWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeacherWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeacherWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeacherWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TeacherWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TeacherWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TeacherWhereInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TeacherWhereInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TeacherWhereInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], TeacherWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], TeacherWhereInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomListRelationFilter_1.ClassroomListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomListRelationFilter_1.ClassroomListRelationFilter)
], TeacherWhereInput.prototype, "classrooms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassListRelationFilter_1.PassListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassListRelationFilter_1.PassListRelationFilter)
], TeacherWhereInput.prototype, "issuedPasses", void 0);
TeacherWhereInput = TeacherWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherWhereInput", {
        isAbstract: true
    })
], TeacherWhereInput);
exports.TeacherWhereInput = TeacherWhereInput;
