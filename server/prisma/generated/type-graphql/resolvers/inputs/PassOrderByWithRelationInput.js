"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomOrderByWithRelationInput_1 = require("../inputs/ClassroomOrderByWithRelationInput");
const StudentOrderByWithRelationInput_1 = require("../inputs/StudentOrderByWithRelationInput");
const TeacherOrderByWithRelationInput_1 = require("../inputs/TeacherOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PassOrderByWithRelationInput = class PassOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PassOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentOrderByWithRelationInput_1.StudentOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentOrderByWithRelationInput_1.StudentOrderByWithRelationInput)
], PassOrderByWithRelationInput.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PassOrderByWithRelationInput.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomOrderByWithRelationInput_1.ClassroomOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomOrderByWithRelationInput_1.ClassroomOrderByWithRelationInput)
], PassOrderByWithRelationInput.prototype, "classroom", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PassOrderByWithRelationInput.prototype, "classId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PassOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PassOrderByWithRelationInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PassOrderByWithRelationInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PassOrderByWithRelationInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherOrderByWithRelationInput_1.TeacherOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherOrderByWithRelationInput_1.TeacherOrderByWithRelationInput)
], PassOrderByWithRelationInput.prototype, "issuer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PassOrderByWithRelationInput.prototype, "issuerId", void 0);
PassOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassOrderByWithRelationInput", {
        isAbstract: true
    })
], PassOrderByWithRelationInput);
exports.PassOrderByWithRelationInput = PassOrderByWithRelationInput;
