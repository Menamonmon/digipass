"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let IPAddressMinOrderByAggregateInput = class IPAddressMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressMinOrderByAggregateInput.prototype, "ownerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressMinOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressMinOrderByAggregateInput.prototype, "address", void 0);
IPAddressMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressMinOrderByAggregateInput", {
        isAbstract: true
    })
], IPAddressMinOrderByAggregateInput);
exports.IPAddressMinOrderByAggregateInput = IPAddressMinOrderByAggregateInput;
