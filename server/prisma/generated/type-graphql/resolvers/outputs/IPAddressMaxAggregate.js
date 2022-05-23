"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IPAddressMaxAggregate = class IPAddressMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressMaxAggregate.prototype, "ownerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IPAddressMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressMaxAggregate.prototype, "address", void 0);
IPAddressMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IPAddressMaxAggregate", {
        isAbstract: true
    })
], IPAddressMaxAggregate);
exports.IPAddressMaxAggregate = IPAddressMaxAggregate;
