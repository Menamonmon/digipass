"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStudentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentOrderByWithAggregationInput_1 = require("../../../inputs/StudentOrderByWithAggregationInput");
const StudentScalarWhereWithAggregatesInput_1 = require("../../../inputs/StudentScalarWhereWithAggregatesInput");
const StudentWhereInput_1 = require("../../../inputs/StudentWhereInput");
const StudentScalarFieldEnum_1 = require("../../../../enums/StudentScalarFieldEnum");
let GroupByStudentArgs = class GroupByStudentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereInput_1.StudentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereInput_1.StudentWhereInput)
], GroupByStudentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentOrderByWithAggregationInput_1.StudentOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByStudentArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentScalarFieldEnum_1.StudentScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByStudentArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentScalarWhereWithAggregatesInput_1.StudentScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentScalarWhereWithAggregatesInput_1.StudentScalarWhereWithAggregatesInput)
], GroupByStudentArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByStudentArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByStudentArgs.prototype, "skip", void 0);
GroupByStudentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByStudentArgs);
exports.GroupByStudentArgs = GroupByStudentArgs;
