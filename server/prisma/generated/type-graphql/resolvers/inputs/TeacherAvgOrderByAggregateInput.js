"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TeacherAvgOrderByAggregateInput = class TeacherAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherAvgOrderByAggregateInput.prototype, "id", void 0);
TeacherAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherAvgOrderByAggregateInput", {
        isAbstract: true
    })
], TeacherAvgOrderByAggregateInput);
exports.TeacherAvgOrderByAggregateInput = TeacherAvgOrderByAggregateInput;
