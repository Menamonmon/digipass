"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let IPAddressAvgOrderByAggregateInput = class IPAddressAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressAvgOrderByAggregateInput.prototype, "ownerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressAvgOrderByAggregateInput.prototype, "id", void 0);
IPAddressAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressAvgOrderByAggregateInput", {
        isAbstract: true
    })
], IPAddressAvgOrderByAggregateInput);
exports.IPAddressAvgOrderByAggregateInput = IPAddressAvgOrderByAggregateInput;
