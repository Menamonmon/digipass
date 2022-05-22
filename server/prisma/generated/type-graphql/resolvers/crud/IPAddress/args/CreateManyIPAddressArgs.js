"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyIPAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressCreateManyInput_1 = require("../../../inputs/IPAddressCreateManyInput");
let CreateManyIPAddressArgs = class CreateManyIPAddressArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IPAddressCreateManyInput_1.IPAddressCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyIPAddressArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyIPAddressArgs.prototype, "skipDuplicates", void 0);
CreateManyIPAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyIPAddressArgs);
exports.CreateManyIPAddressArgs = CreateManyIPAddressArgs;
