"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertClassroomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateInput_1 = require("../../../inputs/ClassroomCreateInput");
const ClassroomUpdateInput_1 = require("../../../inputs/ClassroomUpdateInput");
const ClassroomWhereUniqueInput_1 = require("../../../inputs/ClassroomWhereUniqueInput");
let UpsertClassroomArgs = class UpsertClassroomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput)
], UpsertClassroomArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateInput_1.ClassroomCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomCreateInput_1.ClassroomCreateInput)
], UpsertClassroomArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateInput_1.ClassroomUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateInput_1.ClassroomUpdateInput)
], UpsertClassroomArgs.prototype, "update", void 0);
UpsertClassroomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertClassroomArgs);
exports.UpsertClassroomArgs = UpsertClassroomArgs;
