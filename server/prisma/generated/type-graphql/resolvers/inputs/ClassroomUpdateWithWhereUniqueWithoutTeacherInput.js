"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomUpdateWithWhereUniqueWithoutTeacherInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomUpdateWithoutTeacherInput_1 = require("../inputs/ClassroomUpdateWithoutTeacherInput");
const ClassroomWhereUniqueInput_1 = require("../inputs/ClassroomWhereUniqueInput");
let ClassroomUpdateWithWhereUniqueWithoutTeacherInput = class ClassroomUpdateWithWhereUniqueWithoutTeacherInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput)
], ClassroomUpdateWithWhereUniqueWithoutTeacherInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateWithoutTeacherInput_1.ClassroomUpdateWithoutTeacherInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateWithoutTeacherInput_1.ClassroomUpdateWithoutTeacherInput)
], ClassroomUpdateWithWhereUniqueWithoutTeacherInput.prototype, "data", void 0);
ClassroomUpdateWithWhereUniqueWithoutTeacherInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomUpdateWithWhereUniqueWithoutTeacherInput", {
        isAbstract: true
    })
], ClassroomUpdateWithWhereUniqueWithoutTeacherInput);
exports.ClassroomUpdateWithWhereUniqueWithoutTeacherInput = ClassroomUpdateWithWhereUniqueWithoutTeacherInput;
