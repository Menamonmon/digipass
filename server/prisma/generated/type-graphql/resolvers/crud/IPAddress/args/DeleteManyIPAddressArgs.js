"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyIPAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressWhereInput_1 = require("../../../inputs/IPAddressWhereInput");
let DeleteManyIPAddressArgs = class DeleteManyIPAddressArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressWhereInput_1.IPAddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressWhereInput_1.IPAddressWhereInput)
], DeleteManyIPAddressArgs.prototype, "where", void 0);
DeleteManyIPAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyIPAddressArgs);
exports.DeleteManyIPAddressArgs = DeleteManyIPAddressArgs;
