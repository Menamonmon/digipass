"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClassroomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomUpdateInput_1 = require("../../../inputs/ClassroomUpdateInput");
const ClassroomWhereUniqueInput_1 = require("../../../inputs/ClassroomWhereUniqueInput");
let UpdateClassroomArgs = class UpdateClassroomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateInput_1.ClassroomUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateInput_1.ClassroomUpdateInput)
], UpdateClassroomArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput)
], UpdateClassroomArgs.prototype, "where", void 0);
UpdateClassroomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateClassroomArgs);
exports.UpdateClassroomArgs = UpdateClassroomArgs;
