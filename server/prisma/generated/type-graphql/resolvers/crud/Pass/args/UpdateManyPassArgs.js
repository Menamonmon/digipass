"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPassArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassUpdateManyMutationInput_1 = require("../../../inputs/PassUpdateManyMutationInput");
const PassWhereInput_1 = require("../../../inputs/PassWhereInput");
let UpdateManyPassArgs = class UpdateManyPassArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateManyMutationInput_1.PassUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassUpdateManyMutationInput_1.PassUpdateManyMutationInput)
], UpdateManyPassArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereInput_1.PassWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassWhereInput_1.PassWhereInput)
], UpdateManyPassArgs.prototype, "where", void 0);
UpdateManyPassArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyPassArgs);
exports.UpdateManyPassArgs = UpdateManyPassArgs;
