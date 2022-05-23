"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateManyWithoutIssuerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateManyIssuerInputEnvelope_1 = require("../inputs/PassCreateManyIssuerInputEnvelope");
const PassCreateOrConnectWithoutIssuerInput_1 = require("../inputs/PassCreateOrConnectWithoutIssuerInput");
const PassCreateWithoutIssuerInput_1 = require("../inputs/PassCreateWithoutIssuerInput");
const PassScalarWhereInput_1 = require("../inputs/PassScalarWhereInput");
const PassUpdateManyWithWhereWithoutIssuerInput_1 = require("../inputs/PassUpdateManyWithWhereWithoutIssuerInput");
const PassUpdateWithWhereUniqueWithoutIssuerInput_1 = require("../inputs/PassUpdateWithWhereUniqueWithoutIssuerInput");
const PassUpsertWithWhereUniqueWithoutIssuerInput_1 = require("../inputs/PassUpsertWithWhereUniqueWithoutIssuerInput");
const PassWhereUniqueInput_1 = require("../inputs/PassWhereUniqueInput");
let PassUpdateManyWithoutIssuerInput = class PassUpdateManyWithoutIssuerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassCreateWithoutIssuerInput_1.PassCreateWithoutIssuerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutIssuerInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassCreateOrConnectWithoutIssuerInput_1.PassCreateOrConnectWithoutIssuerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutIssuerInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassUpsertWithWhereUniqueWithoutIssuerInput_1.PassUpsertWithWhereUniqueWithoutIssuerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutIssuerInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateManyIssuerInputEnvelope_1.PassCreateManyIssuerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCreateManyIssuerInputEnvelope_1.PassCreateManyIssuerInputEnvelope)
], PassUpdateManyWithoutIssuerInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereUniqueInput_1.PassWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutIssuerInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereUniqueInput_1.PassWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutIssuerInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereUniqueInput_1.PassWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutIssuerInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereUniqueInput_1.PassWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutIssuerInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassUpdateWithWhereUniqueWithoutIssuerInput_1.PassUpdateWithWhereUniqueWithoutIssuerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutIssuerInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassUpdateManyWithWhereWithoutIssuerInput_1.PassUpdateManyWithWhereWithoutIssuerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutIssuerInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassScalarWhereInput_1.PassScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutIssuerInput.prototype, "deleteMany", void 0);
PassUpdateManyWithoutIssuerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateManyWithoutIssuerInput", {
        isAbstract: true
    })
], PassUpdateManyWithoutIssuerInput);
exports.PassUpdateManyWithoutIssuerInput = PassUpdateManyWithoutIssuerInput;
