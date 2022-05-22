"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherCreateOrConnectWithoutClassroomsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherCreateWithoutClassroomsInput_1 = require("../inputs/TeacherCreateWithoutClassroomsInput");
const TeacherWhereUniqueInput_1 = require("../inputs/TeacherWhereUniqueInput");
let TeacherCreateOrConnectWithoutClassroomsInput = class TeacherCreateOrConnectWithoutClassroomsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereUniqueInput_1.TeacherWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherWhereUniqueInput_1.TeacherWhereUniqueInput)
], TeacherCreateOrConnectWithoutClassroomsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateWithoutClassroomsInput_1.TeacherCreateWithoutClassroomsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherCreateWithoutClassroomsInput_1.TeacherCreateWithoutClassroomsInput)
], TeacherCreateOrConnectWithoutClassroomsInput.prototype, "create", void 0);
TeacherCreateOrConnectWithoutClassroomsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherCreateOrConnectWithoutClassroomsInput", {
        isAbstract: true
    })
], TeacherCreateOrConnectWithoutClassroomsInput);
exports.TeacherCreateOrConnectWithoutClassroomsInput = TeacherCreateOrConnectWithoutClassroomsInput;
