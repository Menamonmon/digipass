"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstStudentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentOrderByWithRelationInput_1 = require("../../../inputs/StudentOrderByWithRelationInput");
const StudentWhereInput_1 = require("../../../inputs/StudentWhereInput");
const StudentWhereUniqueInput_1 = require("../../../inputs/StudentWhereUniqueInput");
const StudentScalarFieldEnum_1 = require("../../../../enums/StudentScalarFieldEnum");
let FindFirstStudentArgs = class FindFirstStudentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereInput_1.StudentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereInput_1.StudentWhereInput)
], FindFirstStudentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentOrderByWithRelationInput_1.StudentOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstStudentArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereUniqueInput_1.StudentWhereUniqueInput)
], FindFirstStudentArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstStudentArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstStudentArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentScalarFieldEnum_1.StudentScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstStudentArgs.prototype, "distinct", void 0);
FindFirstStudentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstStudentArgs);
exports.FindFirstStudentArgs = FindFirstStudentArgs;
