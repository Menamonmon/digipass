"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePassArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassWhereUniqueInput_1 = require("../../../inputs/PassWhereUniqueInput");
let FindUniquePassArgs = class FindUniquePassArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereUniqueInput_1.PassWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassWhereUniqueInput_1.PassWhereUniqueInput)
], FindUniquePassArgs.prototype, "where", void 0);
FindUniquePassArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePassArgs);
exports.FindUniquePassArgs = FindUniquePassArgs;
