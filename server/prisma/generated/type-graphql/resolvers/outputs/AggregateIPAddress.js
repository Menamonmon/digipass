"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIPAddress = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressAvgAggregate_1 = require("../outputs/IPAddressAvgAggregate");
const IPAddressCountAggregate_1 = require("../outputs/IPAddressCountAggregate");
const IPAddressMaxAggregate_1 = require("../outputs/IPAddressMaxAggregate");
const IPAddressMinAggregate_1 = require("../outputs/IPAddressMinAggregate");
const IPAddressSumAggregate_1 = require("../outputs/IPAddressSumAggregate");
let AggregateIPAddress = class AggregateIPAddress {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressCountAggregate_1.IPAddressCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressCountAggregate_1.IPAddressCountAggregate)
], AggregateIPAddress.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressAvgAggregate_1.IPAddressAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressAvgAggregate_1.IPAddressAvgAggregate)
], AggregateIPAddress.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressSumAggregate_1.IPAddressSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressSumAggregate_1.IPAddressSumAggregate)
], AggregateIPAddress.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressMinAggregate_1.IPAddressMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressMinAggregate_1.IPAddressMinAggregate)
], AggregateIPAddress.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressMaxAggregate_1.IPAddressMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressMaxAggregate_1.IPAddressMaxAggregate)
], AggregateIPAddress.prototype, "_max", void 0);
AggregateIPAddress = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateIPAddress", {
        isAbstract: true
    })
], AggregateIPAddress);
exports.AggregateIPAddress = AggregateIPAddress;
