"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTeacherArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherCreateManyInput_1 = require("../../../inputs/TeacherCreateManyInput");
let CreateManyTeacherArgs = class CreateManyTeacherArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeacherCreateManyInput_1.TeacherCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTeacherArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTeacherArgs.prototype, "skipDuplicates", void 0);
CreateManyTeacherArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTeacherArgs);
exports.CreateManyTeacherArgs = CreateManyTeacherArgs;
