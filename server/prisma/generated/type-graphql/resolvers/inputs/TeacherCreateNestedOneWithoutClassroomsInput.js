"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherCreateNestedOneWithoutClassroomsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherCreateOrConnectWithoutClassroomsInput_1 = require("../inputs/TeacherCreateOrConnectWithoutClassroomsInput");
const TeacherCreateWithoutClassroomsInput_1 = require("../inputs/TeacherCreateWithoutClassroomsInput");
const TeacherWhereUniqueInput_1 = require("../inputs/TeacherWhereUniqueInput");
let TeacherCreateNestedOneWithoutClassroomsInput = class TeacherCreateNestedOneWithoutClassroomsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateWithoutClassroomsInput_1.TeacherCreateWithoutClassroomsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherCreateWithoutClassroomsInput_1.TeacherCreateWithoutClassroomsInput)
], TeacherCreateNestedOneWithoutClassroomsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateOrConnectWithoutClassroomsInput_1.TeacherCreateOrConnectWithoutClassroomsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherCreateOrConnectWithoutClassroomsInput_1.TeacherCreateOrConnectWithoutClassroomsInput)
], TeacherCreateNestedOneWithoutClassroomsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereUniqueInput_1.TeacherWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherWhereUniqueInput_1.TeacherWhereUniqueInput)
], TeacherCreateNestedOneWithoutClassroomsInput.prototype, "connect", void 0);
TeacherCreateNestedOneWithoutClassroomsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherCreateNestedOneWithoutClassroomsInput", {
        isAbstract: true
    })
], TeacherCreateNestedOneWithoutClassroomsInput);
exports.TeacherCreateNestedOneWithoutClassroomsInput = TeacherCreateNestedOneWithoutClassroomsInput;
