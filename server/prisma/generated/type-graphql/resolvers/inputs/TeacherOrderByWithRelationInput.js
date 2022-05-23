"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomOrderByRelationAggregateInput_1 = require("../inputs/ClassroomOrderByRelationAggregateInput");
const PassOrderByRelationAggregateInput_1 = require("../inputs/PassOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TeacherOrderByWithRelationInput = class TeacherOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherOrderByWithRelationInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherOrderByWithRelationInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherOrderByWithRelationInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherOrderByWithRelationInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomOrderByRelationAggregateInput_1.ClassroomOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomOrderByRelationAggregateInput_1.ClassroomOrderByRelationAggregateInput)
], TeacherOrderByWithRelationInput.prototype, "classrooms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassOrderByRelationAggregateInput_1.PassOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassOrderByRelationAggregateInput_1.PassOrderByRelationAggregateInput)
], TeacherOrderByWithRelationInput.prototype, "issuedPasses", void 0);
TeacherOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherOrderByWithRelationInput", {
        isAbstract: true
    })
], TeacherOrderByWithRelationInput);
exports.TeacherOrderByWithRelationInput = TeacherOrderByWithRelationInput;
