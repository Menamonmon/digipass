"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PassWhereUniqueInput = class PassWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PassWhereUniqueInput.prototype, "id", void 0);
PassWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassWhereUniqueInput", {
        isAbstract: true
    })
], PassWhereUniqueInput);
exports.PassWhereUniqueInput = PassWhereUniqueInput;
