"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClassroomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateInput_1 = require("../../../inputs/ClassroomCreateInput");
let CreateClassroomArgs = class CreateClassroomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateInput_1.ClassroomCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomCreateInput_1.ClassroomCreateInput)
], CreateClassroomArgs.prototype, "data", void 0);
CreateClassroomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateClassroomArgs);
exports.CreateClassroomArgs = CreateClassroomArgs;
