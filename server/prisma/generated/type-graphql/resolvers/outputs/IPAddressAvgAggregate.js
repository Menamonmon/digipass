"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IPAddressAvgAggregate = class IPAddressAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressAvgAggregate.prototype, "ownerId", void 0);
IPAddressAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IPAddressAvgAggregate", {
        isAbstract: true
    })
], IPAddressAvgAggregate);
exports.IPAddressAvgAggregate = IPAddressAvgAggregate;
