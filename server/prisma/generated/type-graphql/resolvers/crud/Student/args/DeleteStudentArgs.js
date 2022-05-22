"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStudentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentWhereUniqueInput_1 = require("../../../inputs/StudentWhereUniqueInput");
let DeleteStudentArgs = class DeleteStudentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentWhereUniqueInput_1.StudentWhereUniqueInput)
], DeleteStudentArgs.prototype, "where", void 0);
DeleteStudentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteStudentArgs);
exports.DeleteStudentArgs = DeleteStudentArgs;
