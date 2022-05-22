"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTeacherArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherWhereUniqueInput_1 = require("../../../inputs/TeacherWhereUniqueInput");
let DeleteTeacherArgs = class DeleteTeacherArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereUniqueInput_1.TeacherWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherWhereUniqueInput_1.TeacherWhereUniqueInput)
], DeleteTeacherArgs.prototype, "where", void 0);
DeleteTeacherArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteTeacherArgs);
exports.DeleteTeacherArgs = DeleteTeacherArgs;
