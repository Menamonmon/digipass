"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPassArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateManyInput_1 = require("../../../inputs/PassCreateManyInput");
let CreateManyPassArgs = class CreateManyPassArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassCreateManyInput_1.PassCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyPassArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyPassArgs.prototype, "skipDuplicates", void 0);
CreateManyPassArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyPassArgs);
exports.CreateManyPassArgs = CreateManyPassArgs;
