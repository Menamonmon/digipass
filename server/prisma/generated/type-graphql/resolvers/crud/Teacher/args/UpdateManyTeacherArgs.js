"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTeacherArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherUpdateManyMutationInput_1 = require("../../../inputs/TeacherUpdateManyMutationInput");
const TeacherWhereInput_1 = require("../../../inputs/TeacherWhereInput");
let UpdateManyTeacherArgs = class UpdateManyTeacherArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateManyMutationInput_1.TeacherUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherUpdateManyMutationInput_1.TeacherUpdateManyMutationInput)
], UpdateManyTeacherArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereInput_1.TeacherWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherWhereInput_1.TeacherWhereInput)
], UpdateManyTeacherArgs.prototype, "where", void 0);
UpdateManyTeacherArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTeacherArgs);
exports.UpdateManyTeacherArgs = UpdateManyTeacherArgs;
