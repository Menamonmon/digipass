"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassCreateNestedManyWithoutIssuerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateManyIssuerInputEnvelope_1 = require("../inputs/PassCreateManyIssuerInputEnvelope");
const PassCreateOrConnectWithoutIssuerInput_1 = require("../inputs/PassCreateOrConnectWithoutIssuerInput");
const PassCreateWithoutIssuerInput_1 = require("../inputs/PassCreateWithoutIssuerInput");
const PassWhereUniqueInput_1 = require("../inputs/PassWhereUniqueInput");
let PassCreateNestedManyWithoutIssuerInput = class PassCreateNestedManyWithoutIssuerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassCreateWithoutIssuerInput_1.PassCreateWithoutIssuerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassCreateNestedManyWithoutIssuerInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassCreateOrConnectWithoutIssuerInput_1.PassCreateOrConnectWithoutIssuerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassCreateNestedManyWithoutIssuerInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateManyIssuerInputEnvelope_1.PassCreateManyIssuerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCreateManyIssuerInputEnvelope_1.PassCreateManyIssuerInputEnvelope)
], PassCreateNestedManyWithoutIssuerInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereUniqueInput_1.PassWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassCreateNestedManyWithoutIssuerInput.prototype, "connect", void 0);
PassCreateNestedManyWithoutIssuerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassCreateNestedManyWithoutIssuerInput", {
        isAbstract: true
    })
], PassCreateNestedManyWithoutIssuerInput);
exports.PassCreateNestedManyWithoutIssuerInput = PassCreateNestedManyWithoutIssuerInput;
