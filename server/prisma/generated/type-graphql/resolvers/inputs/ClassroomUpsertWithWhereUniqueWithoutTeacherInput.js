"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomUpsertWithWhereUniqueWithoutTeacherInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateWithoutTeacherInput_1 = require("../inputs/ClassroomCreateWithoutTeacherInput");
const ClassroomUpdateWithoutTeacherInput_1 = require("../inputs/ClassroomUpdateWithoutTeacherInput");
const ClassroomWhereUniqueInput_1 = require("../inputs/ClassroomWhereUniqueInput");
let ClassroomUpsertWithWhereUniqueWithoutTeacherInput = class ClassroomUpsertWithWhereUniqueWithoutTeacherInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput)
], ClassroomUpsertWithWhereUniqueWithoutTeacherInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateWithoutTeacherInput_1.ClassroomUpdateWithoutTeacherInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateWithoutTeacherInput_1.ClassroomUpdateWithoutTeacherInput)
], ClassroomUpsertWithWhereUniqueWithoutTeacherInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateWithoutTeacherInput_1.ClassroomCreateWithoutTeacherInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomCreateWithoutTeacherInput_1.ClassroomCreateWithoutTeacherInput)
], ClassroomUpsertWithWhereUniqueWithoutTeacherInput.prototype, "create", void 0);
ClassroomUpsertWithWhereUniqueWithoutTeacherInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomUpsertWithWhereUniqueWithoutTeacherInput", {
        isAbstract: true
    })
], ClassroomUpsertWithWhereUniqueWithoutTeacherInput);
exports.ClassroomUpsertWithWhereUniqueWithoutTeacherInput = ClassroomUpsertWithWhereUniqueWithoutTeacherInput;
