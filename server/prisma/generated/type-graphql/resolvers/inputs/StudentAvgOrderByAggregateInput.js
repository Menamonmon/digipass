"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StudentAvgOrderByAggregateInput = class StudentAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentAvgOrderByAggregateInput.prototype, "passesUsed", void 0);
StudentAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentAvgOrderByAggregateInput", {
        isAbstract: true
    })
], StudentAvgOrderByAggregateInput);
exports.StudentAvgOrderByAggregateInput = StudentAvgOrderByAggregateInput;
