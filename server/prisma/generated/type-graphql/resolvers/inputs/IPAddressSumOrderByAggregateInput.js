"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let IPAddressSumOrderByAggregateInput = class IPAddressSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressSumOrderByAggregateInput.prototype, "ownerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressSumOrderByAggregateInput.prototype, "id", void 0);
IPAddressSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressSumOrderByAggregateInput", {
        isAbstract: true
    })
], IPAddressSumOrderByAggregateInput);
exports.IPAddressSumOrderByAggregateInput = IPAddressSumOrderByAggregateInput;
