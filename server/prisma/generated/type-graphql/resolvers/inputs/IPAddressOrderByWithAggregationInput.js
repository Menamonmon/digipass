"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressAvgOrderByAggregateInput_1 = require("../inputs/IPAddressAvgOrderByAggregateInput");
const IPAddressCountOrderByAggregateInput_1 = require("../inputs/IPAddressCountOrderByAggregateInput");
const IPAddressMaxOrderByAggregateInput_1 = require("../inputs/IPAddressMaxOrderByAggregateInput");
const IPAddressMinOrderByAggregateInput_1 = require("../inputs/IPAddressMinOrderByAggregateInput");
const IPAddressSumOrderByAggregateInput_1 = require("../inputs/IPAddressSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let IPAddressOrderByWithAggregationInput = class IPAddressOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressOrderByWithAggregationInput.prototype, "ownerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressOrderByWithAggregationInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressCountOrderByAggregateInput_1.IPAddressCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressCountOrderByAggregateInput_1.IPAddressCountOrderByAggregateInput)
], IPAddressOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressAvgOrderByAggregateInput_1.IPAddressAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressAvgOrderByAggregateInput_1.IPAddressAvgOrderByAggregateInput)
], IPAddressOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressMaxOrderByAggregateInput_1.IPAddressMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressMaxOrderByAggregateInput_1.IPAddressMaxOrderByAggregateInput)
], IPAddressOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressMinOrderByAggregateInput_1.IPAddressMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressMinOrderByAggregateInput_1.IPAddressMinOrderByAggregateInput)
], IPAddressOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressSumOrderByAggregateInput_1.IPAddressSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressSumOrderByAggregateInput_1.IPAddressSumOrderByAggregateInput)
], IPAddressOrderByWithAggregationInput.prototype, "_sum", void 0);
IPAddressOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressOrderByWithAggregationInput", {
        isAbstract: true
    })
], IPAddressOrderByWithAggregationInput);
exports.IPAddressOrderByWithAggregationInput = IPAddressOrderByWithAggregationInput;
