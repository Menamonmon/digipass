"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ClassroomWhereUniqueInput = class ClassroomWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomWhereUniqueInput.prototype, "id", void 0);
ClassroomWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomWhereUniqueInput", {
        isAbstract: true
    })
], ClassroomWhereUniqueInput);
exports.ClassroomWhereUniqueInput = ClassroomWhereUniqueInput;
