"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePass = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassAvgAggregate_1 = require("../outputs/PassAvgAggregate");
const PassCountAggregate_1 = require("../outputs/PassCountAggregate");
const PassMaxAggregate_1 = require("../outputs/PassMaxAggregate");
const PassMinAggregate_1 = require("../outputs/PassMinAggregate");
const PassSumAggregate_1 = require("../outputs/PassSumAggregate");
let AggregatePass = class AggregatePass {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCountAggregate_1.PassCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCountAggregate_1.PassCountAggregate)
], AggregatePass.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassAvgAggregate_1.PassAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassAvgAggregate_1.PassAvgAggregate)
], AggregatePass.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassSumAggregate_1.PassSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassSumAggregate_1.PassSumAggregate)
], AggregatePass.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassMinAggregate_1.PassMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassMinAggregate_1.PassMinAggregate)
], AggregatePass.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassMaxAggregate_1.PassMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassMaxAggregate_1.PassMaxAggregate)
], AggregatePass.prototype, "_max", void 0);
AggregatePass = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePass", {
        isAbstract: true
    })
], AggregatePass);
exports.AggregatePass = AggregatePass;
