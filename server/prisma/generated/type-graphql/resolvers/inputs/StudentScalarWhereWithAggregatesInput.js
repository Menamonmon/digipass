"use strict";
var StudentScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let StudentScalarWhereWithAggregatesInput = StudentScalarWhereWithAggregatesInput_1 = class StudentScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], StudentScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], StudentScalarWhereWithAggregatesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], StudentScalarWhereWithAggregatesInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], StudentScalarWhereWithAggregatesInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], StudentScalarWhereWithAggregatesInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], StudentScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], StudentScalarWhereWithAggregatesInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], StudentScalarWhereWithAggregatesInput.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], StudentScalarWhereWithAggregatesInput.prototype, "passesUsed", void 0);
StudentScalarWhereWithAggregatesInput = StudentScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], StudentScalarWhereWithAggregatesInput);
exports.StudentScalarWhereWithAggregatesInput = StudentScalarWhereWithAggregatesInput;
