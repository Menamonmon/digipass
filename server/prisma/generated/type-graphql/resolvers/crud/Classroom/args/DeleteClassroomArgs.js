"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClassroomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomWhereUniqueInput_1 = require("../../../inputs/ClassroomWhereUniqueInput");
let DeleteClassroomArgs = class DeleteClassroomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput)
], DeleteClassroomArgs.prototype, "where", void 0);
DeleteClassroomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteClassroomArgs);
exports.DeleteClassroomArgs = DeleteClassroomArgs;
