"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddress = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IPAddress = class IPAddress {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddress.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddress.prototype, "ownerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IPAddress.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddress.prototype, "address", void 0);
IPAddress = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IPAddress", {
        isAbstract: true
    })
], IPAddress);
exports.IPAddress = IPAddress;
