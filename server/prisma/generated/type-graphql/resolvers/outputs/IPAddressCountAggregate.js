"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IPAddressCountAggregate = class IPAddressCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressCountAggregate.prototype, "ownerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressCountAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressCountAggregate.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressCountAggregate.prototype, "_all", void 0);
IPAddressCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IPAddressCountAggregate", {
        isAbstract: true
    })
], IPAddressCountAggregate);
exports.IPAddressCountAggregate = IPAddressCountAggregate;
