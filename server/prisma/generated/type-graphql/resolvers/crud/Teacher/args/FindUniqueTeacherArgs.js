"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTeacherArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherWhereUniqueInput_1 = require("../../../inputs/TeacherWhereUniqueInput");
let FindUniqueTeacherArgs = class FindUniqueTeacherArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereUniqueInput_1.TeacherWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherWhereUniqueInput_1.TeacherWhereUniqueInput)
], FindUniqueTeacherArgs.prototype, "where", void 0);
FindUniqueTeacherArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTeacherArgs);
exports.FindUniqueTeacherArgs = FindUniqueTeacherArgs;
