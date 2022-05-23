"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IPAddressMinAggregate = class IPAddressMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressMinAggregate.prototype, "ownerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IPAddressMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressMinAggregate.prototype, "address", void 0);
IPAddressMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IPAddressMinAggregate", {
        isAbstract: true
    })
], IPAddressMinAggregate);
exports.IPAddressMinAggregate = IPAddressMinAggregate;
