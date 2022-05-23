"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentUpdateWithWhereUniqueWithoutClassroomsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentUpdateWithoutClassroomsInput_1 = require("../inputs/StudentUpdateWithoutClassroomsInput");
const StudentWhereUniqueInput_1 = require("../inputs/StudentWhereUniqueInput");
let StudentUpdateWithWhereUniqueWithoutClassroomsInput = class StudentUpdateWithWhereUniqueWithoutClassroomsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentWhereUniqueInput_1.StudentWhereUniqueInput)
], StudentUpdateWithWhereUniqueWithoutClassroomsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateWithoutClassroomsInput_1.StudentUpdateWithoutClassroomsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentUpdateWithoutClassroomsInput_1.StudentUpdateWithoutClassroomsInput)
], StudentUpdateWithWhereUniqueWithoutClassroomsInput.prototype, "data", void 0);
StudentUpdateWithWhereUniqueWithoutClassroomsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentUpdateWithWhereUniqueWithoutClassroomsInput", {
        isAbstract: true
    })
], StudentUpdateWithWhereUniqueWithoutClassroomsInput);
exports.StudentUpdateWithWhereUniqueWithoutClassroomsInput = StudentUpdateWithWhereUniqueWithoutClassroomsInput;
