"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyClassroomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomOrderByWithRelationInput_1 = require("../../../inputs/ClassroomOrderByWithRelationInput");
const ClassroomWhereInput_1 = require("../../../inputs/ClassroomWhereInput");
const ClassroomWhereUniqueInput_1 = require("../../../inputs/ClassroomWhereUniqueInput");
const ClassroomScalarFieldEnum_1 = require("../../../../enums/ClassroomScalarFieldEnum");
let FindManyClassroomArgs = class FindManyClassroomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereInput_1.ClassroomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomWhereInput_1.ClassroomWhereInput)
], FindManyClassroomArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomOrderByWithRelationInput_1.ClassroomOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyClassroomArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput)
], FindManyClassroomArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyClassroomArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyClassroomArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomScalarFieldEnum_1.ClassroomScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyClassroomArgs.prototype, "distinct", void 0);
FindManyClassroomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyClassroomArgs);
exports.FindManyClassroomArgs = FindManyClassroomArgs;
