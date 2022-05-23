"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomOrderByRelationAggregateInput_1 = require("../inputs/ClassroomOrderByRelationAggregateInput");
const IPAddressOrderByRelationAggregateInput_1 = require("../inputs/IPAddressOrderByRelationAggregateInput");
const PassOrderByRelationAggregateInput_1 = require("../inputs/PassOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let StudentOrderByWithRelationInput = class StudentOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithRelationInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithRelationInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithRelationInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithRelationInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithRelationInput.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StudentOrderByWithRelationInput.prototype, "passesUsed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressOrderByRelationAggregateInput_1.IPAddressOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressOrderByRelationAggregateInput_1.IPAddressOrderByRelationAggregateInput)
], StudentOrderByWithRelationInput.prototype, "ipAddresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomOrderByRelationAggregateInput_1.ClassroomOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomOrderByRelationAggregateInput_1.ClassroomOrderByRelationAggregateInput)
], StudentOrderByWithRelationInput.prototype, "classrooms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassOrderByRelationAggregateInput_1.PassOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassOrderByRelationAggregateInput_1.PassOrderByRelationAggregateInput)
], StudentOrderByWithRelationInput.prototype, "passes", void 0);
StudentOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentOrderByWithRelationInput", {
        isAbstract: true
    })
], StudentOrderByWithRelationInput);
exports.StudentOrderByWithRelationInput = StudentOrderByWithRelationInput;
