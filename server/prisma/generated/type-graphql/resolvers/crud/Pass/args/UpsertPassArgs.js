"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertPassArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateInput_1 = require("../../../inputs/PassCreateInput");
const PassUpdateInput_1 = require("../../../inputs/PassUpdateInput");
const PassWhereUniqueInput_1 = require("../../../inputs/PassWhereUniqueInput");
let UpsertPassArgs = class UpsertPassArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereUniqueInput_1.PassWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassWhereUniqueInput_1.PassWhereUniqueInput)
], UpsertPassArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateInput_1.PassCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassCreateInput_1.PassCreateInput)
], UpsertPassArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateInput_1.PassUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassUpdateInput_1.PassUpdateInput)
], UpsertPassArgs.prototype, "update", void 0);
UpsertPassArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertPassArgs);
exports.UpsertPassArgs = UpsertPassArgs;
