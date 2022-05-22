"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomCreateOrConnectWithoutTeacherInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateWithoutTeacherInput_1 = require("../inputs/ClassroomCreateWithoutTeacherInput");
const ClassroomWhereUniqueInput_1 = require("../inputs/ClassroomWhereUniqueInput");
let ClassroomCreateOrConnectWithoutTeacherInput = class ClassroomCreateOrConnectWithoutTeacherInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput)
], ClassroomCreateOrConnectWithoutTeacherInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateWithoutTeacherInput_1.ClassroomCreateWithoutTeacherInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomCreateWithoutTeacherInput_1.ClassroomCreateWithoutTeacherInput)
], ClassroomCreateOrConnectWithoutTeacherInput.prototype, "create", void 0);
ClassroomCreateOrConnectWithoutTeacherInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomCreateOrConnectWithoutTeacherInput", {
        isAbstract: true
    })
], ClassroomCreateOrConnectWithoutTeacherInput);
exports.ClassroomCreateOrConnectWithoutTeacherInput = ClassroomCreateOrConnectWithoutTeacherInput;
