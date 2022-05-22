"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIPAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressCreateInput_1 = require("../../../inputs/IPAddressCreateInput");
let CreateIPAddressArgs = class CreateIPAddressArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressCreateInput_1.IPAddressCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressCreateInput_1.IPAddressCreateInput)
], CreateIPAddressArgs.prototype, "data", void 0);
CreateIPAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateIPAddressArgs);
exports.CreateIPAddressArgs = CreateIPAddressArgs;
