"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomAvgOrderByAggregateInput_1 = require("../inputs/ClassroomAvgOrderByAggregateInput");
const ClassroomCountOrderByAggregateInput_1 = require("../inputs/ClassroomCountOrderByAggregateInput");
const ClassroomMaxOrderByAggregateInput_1 = require("../inputs/ClassroomMaxOrderByAggregateInput");
const ClassroomMinOrderByAggregateInput_1 = require("../inputs/ClassroomMinOrderByAggregateInput");
const ClassroomSumOrderByAggregateInput_1 = require("../inputs/ClassroomSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ClassroomOrderByWithAggregationInput = class ClassroomOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomOrderByWithAggregationInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomOrderByWithAggregationInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomOrderByWithAggregationInput.prototype, "classCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomOrderByWithAggregationInput.prototype, "teacherId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCountOrderByAggregateInput_1.ClassroomCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomCountOrderByAggregateInput_1.ClassroomCountOrderByAggregateInput)
], ClassroomOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomAvgOrderByAggregateInput_1.ClassroomAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomAvgOrderByAggregateInput_1.ClassroomAvgOrderByAggregateInput)
], ClassroomOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomMaxOrderByAggregateInput_1.ClassroomMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomMaxOrderByAggregateInput_1.ClassroomMaxOrderByAggregateInput)
], ClassroomOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomMinOrderByAggregateInput_1.ClassroomMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomMinOrderByAggregateInput_1.ClassroomMinOrderByAggregateInput)
], ClassroomOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomSumOrderByAggregateInput_1.ClassroomSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomSumOrderByAggregateInput_1.ClassroomSumOrderByAggregateInput)
], ClassroomOrderByWithAggregationInput.prototype, "_sum", void 0);
ClassroomOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomOrderByWithAggregationInput", {
        isAbstract: true
    })
], ClassroomOrderByWithAggregationInput);
exports.ClassroomOrderByWithAggregationInput = ClassroomOrderByWithAggregationInput;
