"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomCreateNestedManyWithoutTeacherInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateManyTeacherInputEnvelope_1 = require("../inputs/ClassroomCreateManyTeacherInputEnvelope");
const ClassroomCreateOrConnectWithoutTeacherInput_1 = require("../inputs/ClassroomCreateOrConnectWithoutTeacherInput");
const ClassroomCreateWithoutTeacherInput_1 = require("../inputs/ClassroomCreateWithoutTeacherInput");
const ClassroomWhereUniqueInput_1 = require("../inputs/ClassroomWhereUniqueInput");
let ClassroomCreateNestedManyWithoutTeacherInput = class ClassroomCreateNestedManyWithoutTeacherInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomCreateWithoutTeacherInput_1.ClassroomCreateWithoutTeacherInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomCreateNestedManyWithoutTeacherInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomCreateOrConnectWithoutTeacherInput_1.ClassroomCreateOrConnectWithoutTeacherInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomCreateNestedManyWithoutTeacherInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateManyTeacherInputEnvelope_1.ClassroomCreateManyTeacherInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomCreateManyTeacherInputEnvelope_1.ClassroomCreateManyTeacherInputEnvelope)
], ClassroomCreateNestedManyWithoutTeacherInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomCreateNestedManyWithoutTeacherInput.prototype, "connect", void 0);
ClassroomCreateNestedManyWithoutTeacherInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomCreateNestedManyWithoutTeacherInput", {
        isAbstract: true
    })
], ClassroomCreateNestedManyWithoutTeacherInput);
exports.ClassroomCreateNestedManyWithoutTeacherInput = ClassroomCreateNestedManyWithoutTeacherInput;
