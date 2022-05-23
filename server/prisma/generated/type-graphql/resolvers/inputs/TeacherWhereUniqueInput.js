"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeacherWhereUniqueInput = class TeacherWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TeacherWhereUniqueInput.prototype, "id", void 0);
TeacherWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherWhereUniqueInput", {
        isAbstract: true
    })
], TeacherWhereUniqueInput);
exports.TeacherWhereUniqueInput = TeacherWhereUniqueInput;
