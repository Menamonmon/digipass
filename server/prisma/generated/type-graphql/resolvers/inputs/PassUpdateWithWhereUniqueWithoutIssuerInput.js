"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateWithWhereUniqueWithoutIssuerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassUpdateWithoutIssuerInput_1 = require("../inputs/PassUpdateWithoutIssuerInput");
const PassWhereUniqueInput_1 = require("../inputs/PassWhereUniqueInput");
let PassUpdateWithWhereUniqueWithoutIssuerInput = class PassUpdateWithWhereUniqueWithoutIssuerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereUniqueInput_1.PassWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassWhereUniqueInput_1.PassWhereUniqueInput)
], PassUpdateWithWhereUniqueWithoutIssuerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateWithoutIssuerInput_1.PassUpdateWithoutIssuerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassUpdateWithoutIssuerInput_1.PassUpdateWithoutIssuerInput)
], PassUpdateWithWhereUniqueWithoutIssuerInput.prototype, "data", void 0);
PassUpdateWithWhereUniqueWithoutIssuerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateWithWhereUniqueWithoutIssuerInput", {
        isAbstract: true
    })
], PassUpdateWithWhereUniqueWithoutIssuerInput);
exports.PassUpdateWithWhereUniqueWithoutIssuerInput = PassUpdateWithWhereUniqueWithoutIssuerInput;
