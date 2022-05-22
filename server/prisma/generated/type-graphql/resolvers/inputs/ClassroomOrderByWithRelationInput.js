"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassOrderByRelationAggregateInput_1 = require("../inputs/PassOrderByRelationAggregateInput");
const StudentOrderByRelationAggregateInput_1 = require("../inputs/StudentOrderByRelationAggregateInput");
const TeacherOrderByWithRelationInput_1 = require("../inputs/TeacherOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ClassroomOrderByWithRelationInput = class ClassroomOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomOrderByWithRelationInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomOrderByWithRelationInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomOrderByWithRelationInput.prototype, "classCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentOrderByRelationAggregateInput_1.StudentOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentOrderByRelationAggregateInput_1.StudentOrderByRelationAggregateInput)
], ClassroomOrderByWithRelationInput.prototype, "students", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherOrderByWithRelationInput_1.TeacherOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherOrderByWithRelationInput_1.TeacherOrderByWithRelationInput)
], ClassroomOrderByWithRelationInput.prototype, "teacher", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomOrderByWithRelationInput.prototype, "teacherId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassOrderByRelationAggregateInput_1.PassOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassOrderByRelationAggregateInput_1.PassOrderByRelationAggregateInput)
], ClassroomOrderByWithRelationInput.prototype, "passes", void 0);
ClassroomOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomOrderByWithRelationInput", {
        isAbstract: true
    })
], ClassroomOrderByWithRelationInput);
exports.ClassroomOrderByWithRelationInput = ClassroomOrderByWithRelationInput;
