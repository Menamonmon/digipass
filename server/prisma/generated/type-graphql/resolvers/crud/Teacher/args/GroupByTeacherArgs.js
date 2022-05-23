"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTeacherArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherOrderByWithAggregationInput_1 = require("../../../inputs/TeacherOrderByWithAggregationInput");
const TeacherScalarWhereWithAggregatesInput_1 = require("../../../inputs/TeacherScalarWhereWithAggregatesInput");
const TeacherWhereInput_1 = require("../../../inputs/TeacherWhereInput");
const TeacherScalarFieldEnum_1 = require("../../../../enums/TeacherScalarFieldEnum");
let GroupByTeacherArgs = class GroupByTeacherArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereInput_1.TeacherWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherWhereInput_1.TeacherWhereInput)
], GroupByTeacherArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeacherOrderByWithAggregationInput_1.TeacherOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTeacherArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeacherScalarFieldEnum_1.TeacherScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTeacherArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherScalarWhereWithAggregatesInput_1.TeacherScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherScalarWhereWithAggregatesInput_1.TeacherScalarWhereWithAggregatesInput)
], GroupByTeacherArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTeacherArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTeacherArgs.prototype, "skip", void 0);
GroupByTeacherArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTeacherArgs);
exports.GroupByTeacherArgs = GroupByTeacherArgs;
