"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByClassroomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomOrderByWithAggregationInput_1 = require("../../../inputs/ClassroomOrderByWithAggregationInput");
const ClassroomScalarWhereWithAggregatesInput_1 = require("../../../inputs/ClassroomScalarWhereWithAggregatesInput");
const ClassroomWhereInput_1 = require("../../../inputs/ClassroomWhereInput");
const ClassroomScalarFieldEnum_1 = require("../../../../enums/ClassroomScalarFieldEnum");
let GroupByClassroomArgs = class GroupByClassroomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereInput_1.ClassroomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomWhereInput_1.ClassroomWhereInput)
], GroupByClassroomArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomOrderByWithAggregationInput_1.ClassroomOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByClassroomArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomScalarFieldEnum_1.ClassroomScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByClassroomArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomScalarWhereWithAggregatesInput_1.ClassroomScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomScalarWhereWithAggregatesInput_1.ClassroomScalarWhereWithAggregatesInput)
], GroupByClassroomArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByClassroomArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByClassroomArgs.prototype, "skip", void 0);
GroupByClassroomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByClassroomArgs);
exports.GroupByClassroomArgs = GroupByClassroomArgs;
