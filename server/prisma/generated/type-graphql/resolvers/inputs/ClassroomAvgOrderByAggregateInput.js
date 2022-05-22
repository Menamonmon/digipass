"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ClassroomAvgOrderByAggregateInput = class ClassroomAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomAvgOrderByAggregateInput.prototype, "teacherId", void 0);
ClassroomAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ClassroomAvgOrderByAggregateInput);
exports.ClassroomAvgOrderByAggregateInput = ClassroomAvgOrderByAggregateInput;
