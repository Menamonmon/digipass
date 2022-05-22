"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstIPAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressOrderByWithRelationInput_1 = require("../../../inputs/IPAddressOrderByWithRelationInput");
const IPAddressWhereInput_1 = require("../../../inputs/IPAddressWhereInput");
const IPAddressWhereUniqueInput_1 = require("../../../inputs/IPAddressWhereUniqueInput");
const IPAddressScalarFieldEnum_1 = require("../../../../enums/IPAddressScalarFieldEnum");
let FindFirstIPAddressArgs = class FindFirstIPAddressArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressWhereInput_1.IPAddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressWhereInput_1.IPAddressWhereInput)
], FindFirstIPAddressArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressOrderByWithRelationInput_1.IPAddressOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstIPAddressArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput)
], FindFirstIPAddressArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstIPAddressArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstIPAddressArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressScalarFieldEnum_1.IPAddressScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstIPAddressArgs.prototype, "distinct", void 0);
FindFirstIPAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstIPAddressArgs);
exports.FindFirstIPAddressArgs = FindFirstIPAddressArgs;
