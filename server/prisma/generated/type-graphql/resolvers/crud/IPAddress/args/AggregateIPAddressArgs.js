"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIPAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressOrderByWithRelationInput_1 = require("../../../inputs/IPAddressOrderByWithRelationInput");
const IPAddressWhereInput_1 = require("../../../inputs/IPAddressWhereInput");
const IPAddressWhereUniqueInput_1 = require("../../../inputs/IPAddressWhereUniqueInput");
let AggregateIPAddressArgs = class AggregateIPAddressArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressWhereInput_1.IPAddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressWhereInput_1.IPAddressWhereInput)
], AggregateIPAddressArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressOrderByWithRelationInput_1.IPAddressOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateIPAddressArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput)
], AggregateIPAddressArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateIPAddressArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateIPAddressArgs.prototype, "skip", void 0);
AggregateIPAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateIPAddressArgs);
exports.AggregateIPAddressArgs = AggregateIPAddressArgs;
