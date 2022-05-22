"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressCreateWithoutOwnerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IPAddressCreateWithoutOwnerInput = class IPAddressCreateWithoutOwnerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IPAddressCreateWithoutOwnerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressCreateWithoutOwnerInput.prototype, "address", void 0);
IPAddressCreateWithoutOwnerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressCreateWithoutOwnerInput", {
        isAbstract: true
    })
], IPAddressCreateWithoutOwnerInput);
exports.IPAddressCreateWithoutOwnerInput = IPAddressCreateWithoutOwnerInput;
