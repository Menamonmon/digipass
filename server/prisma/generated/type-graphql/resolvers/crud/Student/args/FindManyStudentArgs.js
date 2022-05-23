"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyStudentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentOrderByWithRelationInput_1 = require("../../../inputs/StudentOrderByWithRelationInput");
const StudentWhereInput_1 = require("../../../inputs/StudentWhereInput");
const StudentWhereUniqueInput_1 = require("../../../inputs/StudentWhereUniqueInput");
const StudentScalarFieldEnum_1 = require("../../../../enums/StudentScalarFieldEnum");
let FindManyStudentArgs = class FindManyStudentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereInput_1.StudentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereInput_1.StudentWhereInput)
], FindManyStudentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentOrderByWithRelationInput_1.StudentOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyStudentArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereUniqueInput_1.StudentWhereUniqueInput)
], FindManyStudentArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyStudentArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyStudentArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentScalarFieldEnum_1.StudentScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyStudentArgs.prototype, "distinct", void 0);
FindManyStudentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyStudentArgs);
exports.FindManyStudentArgs = FindManyStudentArgs;
