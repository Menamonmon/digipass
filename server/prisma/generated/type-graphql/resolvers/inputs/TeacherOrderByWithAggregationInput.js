"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherAvgOrderByAggregateInput_1 = require("../inputs/TeacherAvgOrderByAggregateInput");
const TeacherCountOrderByAggregateInput_1 = require("../inputs/TeacherCountOrderByAggregateInput");
const TeacherMaxOrderByAggregateInput_1 = require("../inputs/TeacherMaxOrderByAggregateInput");
const TeacherMinOrderByAggregateInput_1 = require("../inputs/TeacherMinOrderByAggregateInput");
const TeacherSumOrderByAggregateInput_1 = require("../inputs/TeacherSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TeacherOrderByWithAggregationInput = class TeacherOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherOrderByWithAggregationInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherOrderByWithAggregationInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherOrderByWithAggregationInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherOrderByWithAggregationInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCountOrderByAggregateInput_1.TeacherCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherCountOrderByAggregateInput_1.TeacherCountOrderByAggregateInput)
], TeacherOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherAvgOrderByAggregateInput_1.TeacherAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherAvgOrderByAggregateInput_1.TeacherAvgOrderByAggregateInput)
], TeacherOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherMaxOrderByAggregateInput_1.TeacherMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherMaxOrderByAggregateInput_1.TeacherMaxOrderByAggregateInput)
], TeacherOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherMinOrderByAggregateInput_1.TeacherMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherMinOrderByAggregateInput_1.TeacherMinOrderByAggregateInput)
], TeacherOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherSumOrderByAggregateInput_1.TeacherSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherSumOrderByAggregateInput_1.TeacherSumOrderByAggregateInput)
], TeacherOrderByWithAggregationInput.prototype, "_sum", void 0);
TeacherOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherOrderByWithAggregationInput", {
        isAbstract: true
    })
], TeacherOrderByWithAggregationInput);
exports.TeacherOrderByWithAggregationInput = TeacherOrderByWithAggregationInput;
