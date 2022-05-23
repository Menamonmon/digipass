"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassAvgOrderByAggregateInput_1 = require("../inputs/PassAvgOrderByAggregateInput");
const PassCountOrderByAggregateInput_1 = require("../inputs/PassCountOrderByAggregateInput");
const PassMaxOrderByAggregateInput_1 = require("../inputs/PassMaxOrderByAggregateInput");
const PassMinOrderByAggregateInput_1 = require("../inputs/PassMinOrderByAggregateInput");
const PassSumOrderByAggregateInput_1 = require("../inputs/PassSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PassOrderByWithAggregationInput = class PassOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PassOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PassOrderByWithAggregationInput.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PassOrderByWithAggregationInput.prototype, "classId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PassOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PassOrderByWithAggregationInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PassOrderByWithAggregationInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PassOrderByWithAggregationInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PassOrderByWithAggregationInput.prototype, "issuerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCountOrderByAggregateInput_1.PassCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCountOrderByAggregateInput_1.PassCountOrderByAggregateInput)
], PassOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassAvgOrderByAggregateInput_1.PassAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassAvgOrderByAggregateInput_1.PassAvgOrderByAggregateInput)
], PassOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassMaxOrderByAggregateInput_1.PassMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassMaxOrderByAggregateInput_1.PassMaxOrderByAggregateInput)
], PassOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassMinOrderByAggregateInput_1.PassMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassMinOrderByAggregateInput_1.PassMinOrderByAggregateInput)
], PassOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassSumOrderByAggregateInput_1.PassSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassSumOrderByAggregateInput_1.PassSumOrderByAggregateInput)
], PassOrderByWithAggregationInput.prototype, "_sum", void 0);
PassOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassOrderByWithAggregationInput", {
        isAbstract: true
    })
], PassOrderByWithAggregationInput);
exports.PassOrderByWithAggregationInput = PassOrderByWithAggregationInput;
