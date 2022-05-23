"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StudentWhereUniqueInput = class StudentWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StudentWhereUniqueInput.prototype, "id", void 0);
StudentWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentWhereUniqueInput", {
        isAbstract: true
    })
], StudentWhereUniqueInput);
exports.StudentWhereUniqueInput = StudentWhereUniqueInput;
