"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTeacherArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherUpdateInput_1 = require("../../../inputs/TeacherUpdateInput");
const TeacherWhereUniqueInput_1 = require("../../../inputs/TeacherWhereUniqueInput");
let UpdateTeacherArgs = class UpdateTeacherArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateInput_1.TeacherUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherUpdateInput_1.TeacherUpdateInput)
], UpdateTeacherArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereUniqueInput_1.TeacherWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherWhereUniqueInput_1.TeacherWhereUniqueInput)
], UpdateTeacherArgs.prototype, "where", void 0);
UpdateTeacherArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateTeacherArgs);
exports.UpdateTeacherArgs = UpdateTeacherArgs;
