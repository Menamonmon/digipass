"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherClassroomsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomOrderByWithRelationInput_1 = require("../../../inputs/ClassroomOrderByWithRelationInput");
const ClassroomWhereInput_1 = require("../../../inputs/ClassroomWhereInput");
const ClassroomWhereUniqueInput_1 = require("../../../inputs/ClassroomWhereUniqueInput");
const ClassroomScalarFieldEnum_1 = require("../../../../enums/ClassroomScalarFieldEnum");
let TeacherClassroomsArgs = class TeacherClassroomsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereInput_1.ClassroomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomWhereInput_1.ClassroomWhereInput)
], TeacherClassroomsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomOrderByWithRelationInput_1.ClassroomOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeacherClassroomsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput)
], TeacherClassroomsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TeacherClassroomsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TeacherClassroomsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomScalarFieldEnum_1.ClassroomScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeacherClassroomsArgs.prototype, "distinct", void 0);
TeacherClassroomsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TeacherClassroomsArgs);
exports.TeacherClassroomsArgs = TeacherClassroomsArgs;
