"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTeacherArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherWhereInput_1 = require("../../../inputs/TeacherWhereInput");
let DeleteManyTeacherArgs = class DeleteManyTeacherArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereInput_1.TeacherWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherWhereInput_1.TeacherWhereInput)
], DeleteManyTeacherArgs.prototype, "where", void 0);
DeleteManyTeacherArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTeacherArgs);
exports.DeleteManyTeacherArgs = DeleteManyTeacherArgs;
