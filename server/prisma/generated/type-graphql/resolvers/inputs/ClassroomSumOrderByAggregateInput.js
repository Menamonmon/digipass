"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ClassroomSumOrderByAggregateInput = class ClassroomSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomSumOrderByAggregateInput.prototype, "teacherId", void 0);
ClassroomSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomSumOrderByAggregateInput", {
        isAbstract: true
    })
], ClassroomSumOrderByAggregateInput);
exports.ClassroomSumOrderByAggregateInput = ClassroomSumOrderByAggregateInput;
