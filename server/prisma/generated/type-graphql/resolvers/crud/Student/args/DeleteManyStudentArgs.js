"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyStudentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentWhereInput_1 = require("../../../inputs/StudentWhereInput");
let DeleteManyStudentArgs = class DeleteManyStudentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereInput_1.StudentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereInput_1.StudentWhereInput)
], DeleteManyStudentArgs.prototype, "where", void 0);
DeleteManyStudentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyStudentArgs);
exports.DeleteManyStudentArgs = DeleteManyStudentArgs;
