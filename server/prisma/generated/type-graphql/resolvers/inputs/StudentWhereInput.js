"use strict";
var StudentWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomListRelationFilter_1 = require("../inputs/ClassroomListRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IPAddressListRelationFilter_1 = require("../inputs/IPAddressListRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const PassListRelationFilter_1 = require("../inputs/PassListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let StudentWhereInput = StudentWhereInput_1 = class StudentWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], StudentWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], StudentWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], StudentWhereInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], StudentWhereInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], StudentWhereInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], StudentWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], StudentWhereInput.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], StudentWhereInput.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], StudentWhereInput.prototype, "passesUsed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressListRelationFilter_1.IPAddressListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressListRelationFilter_1.IPAddressListRelationFilter)
], StudentWhereInput.prototype, "ipAddresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomListRelationFilter_1.ClassroomListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomListRelationFilter_1.ClassroomListRelationFilter)
], StudentWhereInput.prototype, "classrooms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassListRelationFilter_1.PassListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassListRelationFilter_1.PassListRelationFilter)
], StudentWhereInput.prototype, "passes", void 0);
StudentWhereInput = StudentWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentWhereInput", {
        isAbstract: true
    })
], StudentWhereInput);
exports.StudentWhereInput = StudentWhereInput;
