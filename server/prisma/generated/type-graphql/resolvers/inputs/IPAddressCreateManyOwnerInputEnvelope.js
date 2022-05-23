"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressCreateManyOwnerInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressCreateManyOwnerInput_1 = require("../inputs/IPAddressCreateManyOwnerInput");
let IPAddressCreateManyOwnerInputEnvelope = class IPAddressCreateManyOwnerInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressCreateManyOwnerInput_1.IPAddressCreateManyOwnerInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], IPAddressCreateManyOwnerInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], IPAddressCreateManyOwnerInputEnvelope.prototype, "skipDuplicates", void 0);
IPAddressCreateManyOwnerInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressCreateManyOwnerInputEnvelope", {
        isAbstract: true
    })
], IPAddressCreateManyOwnerInputEnvelope);
exports.IPAddressCreateManyOwnerInputEnvelope = IPAddressCreateManyOwnerInputEnvelope;
