"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherCreateOrConnectWithoutIssuedPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherCreateWithoutIssuedPassesInput_1 = require("../inputs/TeacherCreateWithoutIssuedPassesInput");
const TeacherWhereUniqueInput_1 = require("../inputs/TeacherWhereUniqueInput");
let TeacherCreateOrConnectWithoutIssuedPassesInput = class TeacherCreateOrConnectWithoutIssuedPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereUniqueInput_1.TeacherWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherWhereUniqueInput_1.TeacherWhereUniqueInput)
], TeacherCreateOrConnectWithoutIssuedPassesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateWithoutIssuedPassesInput_1.TeacherCreateWithoutIssuedPassesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherCreateWithoutIssuedPassesInput_1.TeacherCreateWithoutIssuedPassesInput)
], TeacherCreateOrConnectWithoutIssuedPassesInput.prototype, "create", void 0);
TeacherCreateOrConnectWithoutIssuedPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherCreateOrConnectWithoutIssuedPassesInput", {
        isAbstract: true
    })
], TeacherCreateOrConnectWithoutIssuedPassesInput);
exports.TeacherCreateOrConnectWithoutIssuedPassesInput = TeacherCreateOrConnectWithoutIssuedPassesInput;
