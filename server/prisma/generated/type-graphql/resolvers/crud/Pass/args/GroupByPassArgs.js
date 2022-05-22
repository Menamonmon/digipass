"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPassArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassOrderByWithAggregationInput_1 = require("../../../inputs/PassOrderByWithAggregationInput");
const PassScalarWhereWithAggregatesInput_1 = require("../../../inputs/PassScalarWhereWithAggregatesInput");
const PassWhereInput_1 = require("../../../inputs/PassWhereInput");
const PassScalarFieldEnum_1 = require("../../../../enums/PassScalarFieldEnum");
let GroupByPassArgs = class GroupByPassArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereInput_1.PassWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassWhereInput_1.PassWhereInput)
], GroupByPassArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassOrderByWithAggregationInput_1.PassOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPassArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassScalarFieldEnum_1.PassScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPassArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassScalarWhereWithAggregatesInput_1.PassScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassScalarWhereWithAggregatesInput_1.PassScalarWhereWithAggregatesInput)
], GroupByPassArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPassArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPassArgs.prototype, "skip", void 0);
GroupByPassArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPassArgs);
exports.GroupByPassArgs = GroupByPassArgs;
