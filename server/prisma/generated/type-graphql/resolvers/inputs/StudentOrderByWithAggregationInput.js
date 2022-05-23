"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentAvgOrderByAggregateInput_1 = require("../inputs/StudentAvgOrderByAggregateInput");
const StudentCountOrderByAggregateInput_1 = require("../inputs/StudentCountOrderByAggregateInput");
const StudentMaxOrderByAggregateInput_1 = require("../inputs/StudentMaxOrderByAggregateInput");
const StudentMinOrderByAggregateInput_1 = require("../inputs/StudentMinOrderByAggregateInput");
const StudentSumOrderByAggregateInput_1 = require("../inputs/StudentSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let StudentOrderByWithAggregationInput = class StudentOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithAggregationInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithAggregationInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithAggregationInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithAggregationInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithAggregationInput.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithAggregationInput.prototype, "passesUsed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCountOrderByAggregateInput_1.StudentCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentCountOrderByAggregateInput_1.StudentCountOrderByAggregateInput)
], StudentOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentAvgOrderByAggregateInput_1.StudentAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentAvgOrderByAggregateInput_1.StudentAvgOrderByAggregateInput)
], StudentOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentMaxOrderByAggregateInput_1.StudentMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentMaxOrderByAggregateInput_1.StudentMaxOrderByAggregateInput)
], StudentOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentMinOrderByAggregateInput_1.StudentMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentMinOrderByAggregateInput_1.StudentMinOrderByAggregateInput)
], StudentOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentSumOrderByAggregateInput_1.StudentSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentSumOrderByAggregateInput_1.StudentSumOrderByAggregateInput)
], StudentOrderByWithAggregationInput.prototype, "_sum", void 0);
StudentOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentOrderByWithAggregationInput", {
        isAbstract: true
    })
], StudentOrderByWithAggregationInput);
exports.StudentOrderByWithAggregationInput = StudentOrderByWithAggregationInput;
