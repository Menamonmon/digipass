"use strict";
var IPAddressWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StudentRelationFilter_1 = require("../inputs/StudentRelationFilter");
let IPAddressWhereInput = IPAddressWhereInput_1 = class IPAddressWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], IPAddressWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentRelationFilter_1.StudentRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentRelationFilter_1.StudentRelationFilter)
], IPAddressWhereInput.prototype, "owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], IPAddressWhereInput.prototype, "ownerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], IPAddressWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IPAddressWhereInput.prototype, "address", void 0);
IPAddressWhereInput = IPAddressWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressWhereInput", {
        isAbstract: true
    })
], IPAddressWhereInput);
exports.IPAddressWhereInput = IPAddressWhereInput;
