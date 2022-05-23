"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyStudentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateManyInput_1 = require("../../../inputs/StudentCreateManyInput");
let CreateManyStudentArgs = class CreateManyStudentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentCreateManyInput_1.StudentCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyStudentArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyStudentArgs.prototype, "skipDuplicates", void 0);
CreateManyStudentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyStudentArgs);
exports.CreateManyStudentArgs = CreateManyStudentArgs;
