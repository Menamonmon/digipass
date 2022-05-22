"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassCreateOrConnectWithoutIssuerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateWithoutIssuerInput_1 = require("../inputs/PassCreateWithoutIssuerInput");
const PassWhereUniqueInput_1 = require("../inputs/PassWhereUniqueInput");
let PassCreateOrConnectWithoutIssuerInput = class PassCreateOrConnectWithoutIssuerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereUniqueInput_1.PassWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassWhereUniqueInput_1.PassWhereUniqueInput)
], PassCreateOrConnectWithoutIssuerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateWithoutIssuerInput_1.PassCreateWithoutIssuerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassCreateWithoutIssuerInput_1.PassCreateWithoutIssuerInput)
], PassCreateOrConnectWithoutIssuerInput.prototype, "create", void 0);
PassCreateOrConnectWithoutIssuerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassCreateOrConnectWithoutIssuerInput", {
        isAbstract: true
    })
], PassCreateOrConnectWithoutIssuerInput);
exports.PassCreateOrConnectWithoutIssuerInput = PassCreateOrConnectWithoutIssuerInput;
