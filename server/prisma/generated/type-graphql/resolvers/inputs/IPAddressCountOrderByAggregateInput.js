"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let IPAddressCountOrderByAggregateInput = class IPAddressCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressCountOrderByAggregateInput.prototype, "ownerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressCountOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressCountOrderByAggregateInput.prototype, "address", void 0);
IPAddressCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressCountOrderByAggregateInput", {
        isAbstract: true
    })
], IPAddressCountOrderByAggregateInput);
exports.IPAddressCountOrderByAggregateInput = IPAddressCountOrderByAggregateInput;
