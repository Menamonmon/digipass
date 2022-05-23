"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePassArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateInput_1 = require("../../../inputs/PassCreateInput");
let CreatePassArgs = class CreatePassArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateInput_1.PassCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassCreateInput_1.PassCreateInput)
], CreatePassArgs.prototype, "data", void 0);
CreatePassArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreatePassArgs);
exports.CreatePassArgs = CreatePassArgs;
