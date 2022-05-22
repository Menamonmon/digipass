"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteIPAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressWhereUniqueInput_1 = require("../../../inputs/IPAddressWhereUniqueInput");
let DeleteIPAddressArgs = class DeleteIPAddressArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IPAddressWhereUniqueInput_1.IPAddressWhereUniqueInput)
], DeleteIPAddressArgs.prototype, "where", void 0);
DeleteIPAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteIPAddressArgs);
exports.DeleteIPAddressArgs = DeleteIPAddressArgs;
