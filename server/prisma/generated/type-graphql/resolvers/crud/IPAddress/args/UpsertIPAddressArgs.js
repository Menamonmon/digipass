"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertIPAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressCreateInput_1 = require("../../../inputs/IPAddressCreateInput");
const IPAddressUpdateInput_1 = require("../../../inputs/IPAddressUpdateInput");
const IPAddressWhereUniqueInput_1 = require("../../../inputs/IPAddressWhereUniqueInput");
let UpsertIPAddressArgs = class UpsertIPAddressArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput)
], UpsertIPAddressArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressCreateInput_1.IPAddressCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressCreateInput_1.IPAddressCreateInput)
], UpsertIPAddressArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressUpdateInput_1.IPAddressUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressUpdateInput_1.IPAddressUpdateInput)
], UpsertIPAddressArgs.prototype, "update", void 0);
UpsertIPAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertIPAddressArgs);
exports.UpsertIPAddressArgs = UpsertIPAddressArgs;
