"use strict";
var IPAddressWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
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
    TypeGraphQL.Field(_type => StudentRelationFilter_1.StudentRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentRelationFilter_1.StudentRelationFilter)
], IPAddressWhereInput.prototype, "owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], IPAddressWhereInput.prototype, "ownerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], IPAddressWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], IPAddressWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IPAddressWhereInput.prototype, "address", void 0);
IPAddressWhereInput = IPAddressWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressWhereInput", {
        isAbstract: true
    })
], IPAddressWhereInput);
exports.IPAddressWhereInput = IPAddressWhereInput;
