"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressUpdateManyWithoutOwnerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressCreateManyOwnerInputEnvelope_1 = require("../inputs/IPAddressCreateManyOwnerInputEnvelope");
const IPAddressCreateOrConnectWithoutOwnerInput_1 = require("../inputs/IPAddressCreateOrConnectWithoutOwnerInput");
const IPAddressCreateWithoutOwnerInput_1 = require("../inputs/IPAddressCreateWithoutOwnerInput");
const IPAddressScalarWhereInput_1 = require("../inputs/IPAddressScalarWhereInput");
const IPAddressUpdateManyWithWhereWithoutOwnerInput_1 = require("../inputs/IPAddressUpdateManyWithWhereWithoutOwnerInput");
const IPAddressUpdateWithWhereUniqueWithoutOwnerInput_1 = require("../inputs/IPAddressUpdateWithWhereUniqueWithoutOwnerInput");
const IPAddressUpsertWithWhereUniqueWithoutOwnerInput_1 = require("../inputs/IPAddressUpsertWithWhereUniqueWithoutOwnerInput");
const IPAddressWhereUniqueInput_1 = require("../inputs/IPAddressWhereUniqueInput");
let IPAddressUpdateManyWithoutOwnerInput = class IPAddressUpdateManyWithoutOwnerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressCreateWithoutOwnerInput_1.IPAddressCreateWithoutOwnerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressUpdateManyWithoutOwnerInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressCreateOrConnectWithoutOwnerInput_1.IPAddressCreateOrConnectWithoutOwnerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressUpdateManyWithoutOwnerInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressUpsertWithWhereUniqueWithoutOwnerInput_1.IPAddressUpsertWithWhereUniqueWithoutOwnerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressUpdateManyWithoutOwnerInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressCreateManyOwnerInputEnvelope_1.IPAddressCreateManyOwnerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressCreateManyOwnerInputEnvelope_1.IPAddressCreateManyOwnerInputEnvelope)
], IPAddressUpdateManyWithoutOwnerInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressUpdateManyWithoutOwnerInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressUpdateManyWithoutOwnerInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressUpdateManyWithoutOwnerInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressUpdateManyWithoutOwnerInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressUpdateWithWhereUniqueWithoutOwnerInput_1.IPAddressUpdateWithWhereUniqueWithoutOwnerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressUpdateManyWithoutOwnerInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressUpdateManyWithWhereWithoutOwnerInput_1.IPAddressUpdateManyWithWhereWithoutOwnerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressUpdateManyWithoutOwnerInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressScalarWhereInput_1.IPAddressScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressUpdateManyWithoutOwnerInput.prototype, "deleteMany", void 0);
IPAddressUpdateManyWithoutOwnerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressUpdateManyWithoutOwnerInput", {
        isAbstract: true
    })
], IPAddressUpdateManyWithoutOwnerInput);
exports.IPAddressUpdateManyWithoutOwnerInput = IPAddressUpdateManyWithoutOwnerInput;
