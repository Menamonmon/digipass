"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByIPAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressOrderByWithAggregationInput_1 = require("../../../inputs/IPAddressOrderByWithAggregationInput");
const IPAddressScalarWhereWithAggregatesInput_1 = require("../../../inputs/IPAddressScalarWhereWithAggregatesInput");
const IPAddressWhereInput_1 = require("../../../inputs/IPAddressWhereInput");
const IPAddressScalarFieldEnum_1 = require("../../../../enums/IPAddressScalarFieldEnum");
let GroupByIPAddressArgs = class GroupByIPAddressArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressWhereInput_1.IPAddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressWhereInput_1.IPAddressWhereInput)
], GroupByIPAddressArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressOrderByWithAggregationInput_1.IPAddressOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByIPAddressArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressScalarFieldEnum_1.IPAddressScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByIPAddressArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressScalarWhereWithAggregatesInput_1.IPAddressScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressScalarWhereWithAggregatesInput_1.IPAddressScalarWhereWithAggregatesInput)
], GroupByIPAddressArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByIPAddressArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByIPAddressArgs.prototype, "skip", void 0);
GroupByIPAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByIPAddressArgs);
exports.GroupByIPAddressArgs = GroupByIPAddressArgs;
