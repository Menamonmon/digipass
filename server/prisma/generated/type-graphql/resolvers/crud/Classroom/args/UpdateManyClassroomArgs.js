"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyClassroomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomUpdateManyMutationInput_1 = require("../../../inputs/ClassroomUpdateManyMutationInput");
const ClassroomWhereInput_1 = require("../../../inputs/ClassroomWhereInput");
let UpdateManyClassroomArgs = class UpdateManyClassroomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateManyMutationInput_1.ClassroomUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateManyMutationInput_1.ClassroomUpdateManyMutationInput)
], UpdateManyClassroomArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereInput_1.ClassroomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomWhereInput_1.ClassroomWhereInput)
], UpdateManyClassroomArgs.prototype, "where", void 0);
UpdateManyClassroomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyClassroomArgs);
exports.UpdateManyClassroomArgs = UpdateManyClassroomArgs;
