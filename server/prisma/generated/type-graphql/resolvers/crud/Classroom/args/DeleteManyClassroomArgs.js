"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyClassroomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomWhereInput_1 = require("../../../inputs/ClassroomWhereInput");
let DeleteManyClassroomArgs = class DeleteManyClassroomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereInput_1.ClassroomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomWhereInput_1.ClassroomWhereInput)
], DeleteManyClassroomArgs.prototype, "where", void 0);
DeleteManyClassroomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyClassroomArgs);
exports.DeleteManyClassroomArgs = DeleteManyClassroomArgs;
