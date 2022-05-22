"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePassArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassUpdateInput_1 = require("../../../inputs/PassUpdateInput");
const PassWhereUniqueInput_1 = require("../../../inputs/PassWhereUniqueInput");
let UpdatePassArgs = class UpdatePassArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateInput_1.PassUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassUpdateInput_1.PassUpdateInput)
], UpdatePassArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereUniqueInput_1.PassWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassWhereUniqueInput_1.PassWhereUniqueInput)
], UpdatePassArgs.prototype, "where", void 0);
UpdatePassArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdatePassArgs);
exports.UpdatePassArgs = UpdatePassArgs;
