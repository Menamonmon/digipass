"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpsertWithWhereUniqueWithoutIssuerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateWithoutIssuerInput_1 = require("../inputs/PassCreateWithoutIssuerInput");
const PassUpdateWithoutIssuerInput_1 = require("../inputs/PassUpdateWithoutIssuerInput");
const PassWhereUniqueInput_1 = require("../inputs/PassWhereUniqueInput");
let PassUpsertWithWhereUniqueWithoutIssuerInput = class PassUpsertWithWhereUniqueWithoutIssuerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereUniqueInput_1.PassWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassWhereUniqueInput_1.PassWhereUniqueInput)
], PassUpsertWithWhereUniqueWithoutIssuerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateWithoutIssuerInput_1.PassUpdateWithoutIssuerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassUpdateWithoutIssuerInput_1.PassUpdateWithoutIssuerInput)
], PassUpsertWithWhereUniqueWithoutIssuerInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateWithoutIssuerInput_1.PassCreateWithoutIssuerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassCreateWithoutIssuerInput_1.PassCreateWithoutIssuerInput)
], PassUpsertWithWhereUniqueWithoutIssuerInput.prototype, "create", void 0);
PassUpsertWithWhereUniqueWithoutIssuerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpsertWithWhereUniqueWithoutIssuerInput", {
        isAbstract: true
    })
], PassUpsertWithWhereUniqueWithoutIssuerInput);
exports.PassUpsertWithWhereUniqueWithoutIssuerInput = PassUpsertWithWhereUniqueWithoutIssuerInput;
