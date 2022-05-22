"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentUpdateInput_1 = require("../../../inputs/StudentUpdateInput");
const StudentWhereUniqueInput_1 = require("../../../inputs/StudentWhereUniqueInput");
let UpdateStudentArgs = class UpdateStudentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateInput_1.StudentUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentUpdateInput_1.StudentUpdateInput)
], UpdateStudentArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentWhereUniqueInput_1.StudentWhereUniqueInput)
], UpdateStudentArgs.prototype, "where", void 0);
UpdateStudentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateStudentArgs);
exports.UpdateStudentArgs = UpdateStudentArgs;
