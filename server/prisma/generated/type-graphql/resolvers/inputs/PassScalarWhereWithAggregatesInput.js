"use strict";
var PassScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
let PassScalarWhereWithAggregatesInput = PassScalarWhereWithAggregatesInput_1 = class PassScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], PassScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], PassScalarWhereWithAggregatesInput.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], PassScalarWhereWithAggregatesInput.prototype, "classId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], PassScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], PassScalarWhereWithAggregatesInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], PassScalarWhereWithAggregatesInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], PassScalarWhereWithAggregatesInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], PassScalarWhereWithAggregatesInput.prototype, "issuerId", void 0);
PassScalarWhereWithAggregatesInput = PassScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("PassScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], PassScalarWhereWithAggregatesInput);
exports.PassScalarWhereWithAggregatesInput = PassScalarWhereWithAggregatesInput;
