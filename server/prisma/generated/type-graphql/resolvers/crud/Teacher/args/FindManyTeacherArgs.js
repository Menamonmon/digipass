"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTeacherArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherOrderByWithRelationInput_1 = require("../../../inputs/TeacherOrderByWithRelationInput");
const TeacherWhereInput_1 = require("../../../inputs/TeacherWhereInput");
const TeacherWhereUniqueInput_1 = require("../../../inputs/TeacherWhereUniqueInput");
const TeacherScalarFieldEnum_1 = require("../../../../enums/TeacherScalarFieldEnum");
let FindManyTeacherArgs = class FindManyTeacherArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereInput_1.TeacherWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherWhereInput_1.TeacherWhereInput)
], FindManyTeacherArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeacherOrderByWithRelationInput_1.TeacherOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTeacherArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereUniqueInput_1.TeacherWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherWhereUniqueInput_1.TeacherWhereUniqueInput)
], FindManyTeacherArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTeacherArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTeacherArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeacherScalarFieldEnum_1.TeacherScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTeacherArgs.prototype, "distinct", void 0);
FindManyTeacherArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyTeacherArgs);
exports.FindManyTeacherArgs = FindManyTeacherArgs;
