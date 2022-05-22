"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyClassroomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateManyInput_1 = require("../../../inputs/ClassroomCreateManyInput");
let CreateManyClassroomArgs = class CreateManyClassroomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomCreateManyInput_1.ClassroomCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyClassroomArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyClassroomArgs.prototype, "skipDuplicates", void 0);
CreateManyClassroomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyClassroomArgs);
exports.CreateManyClassroomArgs = CreateManyClassroomArgs;
