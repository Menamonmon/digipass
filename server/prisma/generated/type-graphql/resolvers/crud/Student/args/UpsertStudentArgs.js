"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertStudentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateInput_1 = require("../../../inputs/StudentCreateInput");
const StudentUpdateInput_1 = require("../../../inputs/StudentUpdateInput");
const StudentWhereUniqueInput_1 = require("../../../inputs/StudentWhereUniqueInput");
let UpsertStudentArgs = class UpsertStudentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentWhereUniqueInput_1.StudentWhereUniqueInput)
], UpsertStudentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateInput_1.StudentCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentCreateInput_1.StudentCreateInput)
], UpsertStudentArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateInput_1.StudentUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentUpdateInput_1.StudentUpdateInput)
], UpsertStudentArgs.prototype, "update", void 0);
UpsertStudentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertStudentArgs);
exports.UpsertStudentArgs = UpsertStudentArgs;
