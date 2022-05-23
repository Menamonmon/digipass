"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTeacherArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherOrderByWithRelationInput_1 = require("../../../inputs/TeacherOrderByWithRelationInput");
const TeacherWhereInput_1 = require("../../../inputs/TeacherWhereInput");
const TeacherWhereUniqueInput_1 = require("../../../inputs/TeacherWhereUniqueInput");
const TeacherScalarFieldEnum_1 = require("../../../../enums/TeacherScalarFieldEnum");
let FindFirstTeacherArgs = class FindFirstTeacherArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereInput_1.TeacherWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherWhereInput_1.TeacherWhereInput)
], FindFirstTeacherArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeacherOrderByWithRelationInput_1.TeacherOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTeacherArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereUniqueInput_1.TeacherWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherWhereUniqueInput_1.TeacherWhereUniqueInput)
], FindFirstTeacherArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTeacherArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTeacherArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeacherScalarFieldEnum_1.TeacherScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTeacherArgs.prototype, "distinct", void 0);
FindFirstTeacherArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTeacherArgs);
exports.FindFirstTeacherArgs = FindFirstTeacherArgs;
