"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateInput_1 = require("../../../inputs/StudentCreateInput");
let CreateStudentArgs = class CreateStudentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateInput_1.StudentCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentCreateInput_1.StudentCreateInput)
], CreateStudentArgs.prototype, "data", void 0);
CreateStudentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateStudentArgs);
exports.CreateStudentArgs = CreateStudentArgs;
