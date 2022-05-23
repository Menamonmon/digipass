"use strict";
var IPAddressScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let IPAddressScalarWhereInput = IPAddressScalarWhereInput_1 = class IPAddressScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], IPAddressScalarWhereInput.prototype, "ownerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], IPAddressScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], IPAddressScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], IPAddressScalarWhereInput.prototype, "address", void 0);
IPAddressScalarWhereInput = IPAddressScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressScalarWhereInput", {
        isAbstract: true
    })
], IPAddressScalarWhereInput);
exports.IPAddressScalarWhereInput = IPAddressScalarWhereInput;
