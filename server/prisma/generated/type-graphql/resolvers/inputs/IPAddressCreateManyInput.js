"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IPAddressCreateManyInput = class IPAddressCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressCreateManyInput.prototype, "ownerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IPAddressCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressCreateManyInput.prototype, "address", void 0);
IPAddressCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressCreateManyInput", {
        isAbstract: true
    })
], IPAddressCreateManyInput);
exports.IPAddressCreateManyInput = IPAddressCreateManyInput;
