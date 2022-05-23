"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let IPAddressMaxOrderByAggregateInput = class IPAddressMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressMaxOrderByAggregateInput.prototype, "ownerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressMaxOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressMaxOrderByAggregateInput.prototype, "address", void 0);
IPAddressMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressMaxOrderByAggregateInput", {
        isAbstract: true
    })
], IPAddressMaxOrderByAggregateInput);
exports.IPAddressMaxOrderByAggregateInput = IPAddressMaxOrderByAggregateInput;
