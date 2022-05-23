"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueClassroomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomWhereUniqueInput_1 = require("../../../inputs/ClassroomWhereUniqueInput");
let FindUniqueClassroomArgs = class FindUniqueClassroomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput)
], FindUniqueClassroomArgs.prototype, "where", void 0);
FindUniqueClassroomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueClassroomArgs);
exports.FindUniqueClassroomArgs = FindUniqueClassroomArgs;
