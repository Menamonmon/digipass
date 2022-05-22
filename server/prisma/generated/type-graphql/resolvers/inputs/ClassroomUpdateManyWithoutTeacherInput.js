"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomUpdateManyWithoutTeacherInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateManyTeacherInputEnvelope_1 = require("../inputs/ClassroomCreateManyTeacherInputEnvelope");
const ClassroomCreateOrConnectWithoutTeacherInput_1 = require("../inputs/ClassroomCreateOrConnectWithoutTeacherInput");
const ClassroomCreateWithoutTeacherInput_1 = require("../inputs/ClassroomCreateWithoutTeacherInput");
const ClassroomScalarWhereInput_1 = require("../inputs/ClassroomScalarWhereInput");
const ClassroomUpdateManyWithWhereWithoutTeacherInput_1 = require("../inputs/ClassroomUpdateManyWithWhereWithoutTeacherInput");
const ClassroomUpdateWithWhereUniqueWithoutTeacherInput_1 = require("../inputs/ClassroomUpdateWithWhereUniqueWithoutTeacherInput");
const ClassroomUpsertWithWhereUniqueWithoutTeacherInput_1 = require("../inputs/ClassroomUpsertWithWhereUniqueWithoutTeacherInput");
const ClassroomWhereUniqueInput_1 = require("../inputs/ClassroomWhereUniqueInput");
let ClassroomUpdateManyWithoutTeacherInput = class ClassroomUpdateManyWithoutTeacherInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomCreateWithoutTeacherInput_1.ClassroomCreateWithoutTeacherInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutTeacherInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomCreateOrConnectWithoutTeacherInput_1.ClassroomCreateOrConnectWithoutTeacherInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutTeacherInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomUpsertWithWhereUniqueWithoutTeacherInput_1.ClassroomUpsertWithWhereUniqueWithoutTeacherInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutTeacherInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateManyTeacherInputEnvelope_1.ClassroomCreateManyTeacherInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomCreateManyTeacherInputEnvelope_1.ClassroomCreateManyTeacherInputEnvelope)
], ClassroomUpdateManyWithoutTeacherInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutTeacherInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutTeacherInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutTeacherInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutTeacherInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomUpdateWithWhereUniqueWithoutTeacherInput_1.ClassroomUpdateWithWhereUniqueWithoutTeacherInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutTeacherInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomUpdateManyWithWhereWithoutTeacherInput_1.ClassroomUpdateManyWithWhereWithoutTeacherInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutTeacherInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomScalarWhereInput_1.ClassroomScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutTeacherInput.prototype, "deleteMany", void 0);
ClassroomUpdateManyWithoutTeacherInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomUpdateManyWithoutTeacherInput", {
        isAbstract: true
    })
], ClassroomUpdateManyWithoutTeacherInput);
exports.ClassroomUpdateManyWithoutTeacherInput = ClassroomUpdateManyWithoutTeacherInput;
