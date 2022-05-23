"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTeacherArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherCreateInput_1 = require("../../../inputs/TeacherCreateInput");
let CreateTeacherArgs = class CreateTeacherArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateInput_1.TeacherCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherCreateInput_1.TeacherCreateInput)
], CreateTeacherArgs.prototype, "data", void 0);
CreateTeacherArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateTeacherArgs);
exports.CreateTeacherArgs = CreateTeacherArgs;
