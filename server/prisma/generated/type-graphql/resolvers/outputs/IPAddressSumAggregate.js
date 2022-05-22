"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IPAddressSumAggregate = class IPAddressSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressSumAggregate.prototype, "ownerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressSumAggregate.prototype, "id", void 0);
IPAddressSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IPAddressSumAggregate", {
        isAbstract: true
    })
], IPAddressSumAggregate);
exports.IPAddressSumAggregate = IPAddressSumAggregate;
