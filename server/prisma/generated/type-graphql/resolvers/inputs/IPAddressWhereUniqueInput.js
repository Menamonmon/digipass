"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IPAddressWhereUniqueInput = class IPAddressWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IPAddressWhereUniqueInput.prototype, "id", void 0);
IPAddressWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressWhereUniqueInput", {
        isAbstract: true
    })
], IPAddressWhereUniqueInput);
exports.IPAddressWhereUniqueInput = IPAddressWhereUniqueInput;
