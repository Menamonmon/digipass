"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyIPAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressUpdateManyMutationInput_1 = require("../../../inputs/IPAddressUpdateManyMutationInput");
const IPAddressWhereInput_1 = require("../../../inputs/IPAddressWhereInput");
let UpdateManyIPAddressArgs = class UpdateManyIPAddressArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressUpdateManyMutationInput_1.IPAddressUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressUpdateManyMutationInput_1.IPAddressUpdateManyMutationInput)
], UpdateManyIPAddressArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressWhereInput_1.IPAddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressWhereInput_1.IPAddressWhereInput)
], UpdateManyIPAddressArgs.prototype, "where", void 0);
UpdateManyIPAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyIPAddressArgs);
exports.UpdateManyIPAddressArgs = UpdateManyIPAddressArgs;
