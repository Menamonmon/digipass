"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressCreateManyOwnerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IPAddressCreateManyOwnerInput = class IPAddressCreateManyOwnerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressCreateManyOwnerInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IPAddressCreateManyOwnerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressCreateManyOwnerInput.prototype, "address", void 0);
IPAddressCreateManyOwnerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressCreateManyOwnerInput", {
        isAbstract: true
    })
], IPAddressCreateManyOwnerInput);
exports.IPAddressCreateManyOwnerInput = IPAddressCreateManyOwnerInput;
