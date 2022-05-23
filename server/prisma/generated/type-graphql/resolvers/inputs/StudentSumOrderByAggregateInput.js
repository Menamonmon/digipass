"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StudentSumOrderByAggregateInput = class StudentSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentSumOrderByAggregateInput.prototype, "passesUsed", void 0);
StudentSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentSumOrderByAggregateInput", {
        isAbstract: true
    })
], StudentSumOrderByAggregateInput);
exports.StudentSumOrderByAggregateInput = StudentSumOrderByAggregateInput;
