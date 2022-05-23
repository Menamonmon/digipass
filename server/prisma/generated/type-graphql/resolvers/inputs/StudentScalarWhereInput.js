"use strict";
var StudentScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let StudentScalarWhereInput = StudentScalarWhereInput_1 = class StudentScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], StudentScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], StudentScalarWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], StudentScalarWhereInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], StudentScalarWhereInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], StudentScalarWhereInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], StudentScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], StudentScalarWhereInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], StudentScalarWhereInput.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], StudentScalarWhereInput.prototype, "passesUsed", void 0);
StudentScalarWhereInput = StudentScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentScalarWhereInput", {
        isAbstract: true
    })
], StudentScalarWhereInput);
exports.StudentScalarWhereInput = StudentScalarWhereInput;
