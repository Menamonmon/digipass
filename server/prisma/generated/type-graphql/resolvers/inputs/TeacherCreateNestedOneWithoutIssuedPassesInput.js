"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherCreateNestedOneWithoutIssuedPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherCreateOrConnectWithoutIssuedPassesInput_1 = require("../inputs/TeacherCreateOrConnectWithoutIssuedPassesInput");
const TeacherCreateWithoutIssuedPassesInput_1 = require("../inputs/TeacherCreateWithoutIssuedPassesInput");
const TeacherWhereUniqueInput_1 = require("../inputs/TeacherWhereUniqueInput");
let TeacherCreateNestedOneWithoutIssuedPassesInput = class TeacherCreateNestedOneWithoutIssuedPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateWithoutIssuedPassesInput_1.TeacherCreateWithoutIssuedPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherCreateWithoutIssuedPassesInput_1.TeacherCreateWithoutIssuedPassesInput)
], TeacherCreateNestedOneWithoutIssuedPassesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateOrConnectWithoutIssuedPassesInput_1.TeacherCreateOrConnectWithoutIssuedPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherCreateOrConnectWithoutIssuedPassesInput_1.TeacherCreateOrConnectWithoutIssuedPassesInput)
], TeacherCreateNestedOneWithoutIssuedPassesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereUniqueInput_1.TeacherWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherWhereUniqueInput_1.TeacherWhereUniqueInput)
], TeacherCreateNestedOneWithoutIssuedPassesInput.prototype, "connect", void 0);
TeacherCreateNestedOneWithoutIssuedPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherCreateNestedOneWithoutIssuedPassesInput", {
        isAbstract: true
    })
], TeacherCreateNestedOneWithoutIssuedPassesInput);
exports.TeacherCreateNestedOneWithoutIssuedPassesInput = TeacherCreateNestedOneWithoutIssuedPassesInput;
