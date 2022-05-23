"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentUpsertWithWhereUniqueWithoutClassroomsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateWithoutClassroomsInput_1 = require("../inputs/StudentCreateWithoutClassroomsInput");
const StudentUpdateWithoutClassroomsInput_1 = require("../inputs/StudentUpdateWithoutClassroomsInput");
const StudentWhereUniqueInput_1 = require("../inputs/StudentWhereUniqueInput");
let StudentUpsertWithWhereUniqueWithoutClassroomsInput = class StudentUpsertWithWhereUniqueWithoutClassroomsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentWhereUniqueInput_1.StudentWhereUniqueInput)
], StudentUpsertWithWhereUniqueWithoutClassroomsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateWithoutClassroomsInput_1.StudentUpdateWithoutClassroomsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentUpdateWithoutClassroomsInput_1.StudentUpdateWithoutClassroomsInput)
], StudentUpsertWithWhereUniqueWithoutClassroomsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateWithoutClassroomsInput_1.StudentCreateWithoutClassroomsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentCreateWithoutClassroomsInput_1.StudentCreateWithoutClassroomsInput)
], StudentUpsertWithWhereUniqueWithoutClassroomsInput.prototype, "create", void 0);
StudentUpsertWithWhereUniqueWithoutClassroomsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentUpsertWithWhereUniqueWithoutClassroomsInput", {
        isAbstract: true
    })
], StudentUpsertWithWhereUniqueWithoutClassroomsInput);
exports.StudentUpsertWithWhereUniqueWithoutClassroomsInput = StudentUpsertWithWhereUniqueWithoutClassroomsInput;
