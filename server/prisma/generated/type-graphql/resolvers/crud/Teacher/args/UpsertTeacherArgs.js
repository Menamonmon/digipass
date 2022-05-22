"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTeacherArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherCreateInput_1 = require("../../../inputs/TeacherCreateInput");
const TeacherUpdateInput_1 = require("../../../inputs/TeacherUpdateInput");
const TeacherWhereUniqueInput_1 = require("../../../inputs/TeacherWhereUniqueInput");
let UpsertTeacherArgs = class UpsertTeacherArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereUniqueInput_1.TeacherWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherWhereUniqueInput_1.TeacherWhereUniqueInput)
], UpsertTeacherArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateInput_1.TeacherCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherCreateInput_1.TeacherCreateInput)
], UpsertTeacherArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateInput_1.TeacherUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherUpdateInput_1.TeacherUpdateInput)
], UpsertTeacherArgs.prototype, "update", void 0);
UpsertTeacherArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertTeacherArgs);
exports.UpsertTeacherArgs = UpsertTeacherArgs;
