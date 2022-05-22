"use strict";
var TeacherWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomListRelationFilter_1 = require("../inputs/ClassroomListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const PassListRelationFilter_1 = require("../inputs/PassListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
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
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeacherWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeacherWhereInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeacherWhereInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeacherWhereInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TeacherWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
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
