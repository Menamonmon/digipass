"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateClassroomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomOrderByWithRelationInput_1 = require("../../../inputs/ClassroomOrderByWithRelationInput");
const ClassroomWhereInput_1 = require("../../../inputs/ClassroomWhereInput");
const ClassroomWhereUniqueInput_1 = require("../../../inputs/ClassroomWhereUniqueInput");
let AggregateClassroomArgs = class AggregateClassroomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereInput_1.ClassroomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomWhereInput_1.ClassroomWhereInput)
], AggregateClassroomArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomOrderByWithRelationInput_1.ClassroomOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateClassroomArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput)
], AggregateClassroomArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateClassroomArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateClassroomArgs.prototype, "skip", void 0);
AggregateClassroomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateClassroomArgs);
exports.AggregateClassroomArgs = AggregateClassroomArgs;
