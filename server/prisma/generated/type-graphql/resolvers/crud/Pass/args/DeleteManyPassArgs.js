"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPassArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassWhereInput_1 = require("../../../inputs/PassWhereInput");
let DeleteManyPassArgs = class DeleteManyPassArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereInput_1.PassWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassWhereInput_1.PassWhereInput)
], DeleteManyPassArgs.prototype, "where", void 0);
DeleteManyPassArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyPassArgs);
exports.DeleteManyPassArgs = DeleteManyPassArgs;
