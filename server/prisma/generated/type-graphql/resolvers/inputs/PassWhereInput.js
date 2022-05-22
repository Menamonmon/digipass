"use strict";
var PassWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomRelationFilter_1 = require("../inputs/ClassroomRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StudentRelationFilter_1 = require("../inputs/StudentRelationFilter");
const TeacherRelationFilter_1 = require("../inputs/TeacherRelationFilter");
let PassWhereInput = PassWhereInput_1 = class PassWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], PassWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentRelationFilter_1.StudentRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentRelationFilter_1.StudentRelationFilter)
], PassWhereInput.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], PassWhereInput.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomRelationFilter_1.ClassroomRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomRelationFilter_1.ClassroomRelationFilter)
], PassWhereInput.prototype, "classroom", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], PassWhereInput.prototype, "classId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PassWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PassWhereInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PassWhereInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], PassWhereInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherRelationFilter_1.TeacherRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherRelationFilter_1.TeacherRelationFilter)
], PassWhereInput.prototype, "issuer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], PassWhereInput.prototype, "issuerId", void 0);
PassWhereInput = PassWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("PassWhereInput", {
        isAbstract: true
    })
], PassWhereInput);
exports.PassWhereInput = PassWhereInput;
