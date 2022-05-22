"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIPAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressUpdateInput_1 = require("../../../inputs/IPAddressUpdateInput");
const IPAddressWhereUniqueInput_1 = require("../../../inputs/IPAddressWhereUniqueInput");
let UpdateIPAddressArgs = class UpdateIPAddressArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressUpdateInput_1.IPAddressUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressUpdateInput_1.IPAddressUpdateInput)
], UpdateIPAddressArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput)
], UpdateIPAddressArgs.prototype, "where", void 0);
UpdateIPAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateIPAddressArgs);
exports.UpdateIPAddressArgs = UpdateIPAddressArgs;
