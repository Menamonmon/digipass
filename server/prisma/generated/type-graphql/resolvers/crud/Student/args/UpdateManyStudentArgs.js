"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyStudentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentUpdateManyMutationInput_1 = require("../../../inputs/StudentUpdateManyMutationInput");
const StudentWhereInput_1 = require("../../../inputs/StudentWhereInput");
let UpdateManyStudentArgs = class UpdateManyStudentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateManyMutationInput_1.StudentUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentUpdateManyMutationInput_1.StudentUpdateManyMutationInput)
], UpdateManyStudentArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereInput_1.StudentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereInput_1.StudentWhereInput)
], UpdateManyStudentArgs.prototype, "where", void 0);
UpdateManyStudentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyStudentArgs);
exports.UpdateManyStudentArgs = UpdateManyStudentArgs;
