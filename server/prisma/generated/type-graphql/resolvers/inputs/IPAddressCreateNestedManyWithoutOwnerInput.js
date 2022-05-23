"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressCreateNestedManyWithoutOwnerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressCreateManyOwnerInputEnvelope_1 = require("../inputs/IPAddressCreateManyOwnerInputEnvelope");
const IPAddressCreateOrConnectWithoutOwnerInput_1 = require("../inputs/IPAddressCreateOrConnectWithoutOwnerInput");
const IPAddressCreateWithoutOwnerInput_1 = require("../inputs/IPAddressCreateWithoutOwnerInput");
const IPAddressWhereUniqueInput_1 = require("../inputs/IPAddressWhereUniqueInput");
let IPAddressCreateNestedManyWithoutOwnerInput = class IPAddressCreateNestedManyWithoutOwnerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressCreateWithoutOwnerInput_1.IPAddressCreateWithoutOwnerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressCreateNestedManyWithoutOwnerInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressCreateOrConnectWithoutOwnerInput_1.IPAddressCreateOrConnectWithoutOwnerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressCreateNestedManyWithoutOwnerInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressCreateManyOwnerInputEnvelope_1.IPAddressCreateManyOwnerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressCreateManyOwnerInputEnvelope_1.IPAddressCreateManyOwnerInputEnvelope)
], IPAddressCreateNestedManyWithoutOwnerInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressCreateNestedManyWithoutOwnerInput.prototype, "connect", void 0);
IPAddressCreateNestedManyWithoutOwnerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressCreateNestedManyWithoutOwnerInput", {
        isAbstract: true
    })
], IPAddressCreateNestedManyWithoutOwnerInput);
exports.IPAddressCreateNestedManyWithoutOwnerInput = IPAddressCreateNestedManyWithoutOwnerInput;
