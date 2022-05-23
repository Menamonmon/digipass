"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueStudentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentWhereUniqueInput_1 = require("../../../inputs/StudentWhereUniqueInput");
let FindUniqueStudentArgs = class FindUniqueStudentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentWhereUniqueInput_1.StudentWhereUniqueInput)
], FindUniqueStudentArgs.prototype, "where", void 0);
FindUniqueStudentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueStudentArgs);
exports.FindUniqueStudentArgs = FindUniqueStudentArgs;
