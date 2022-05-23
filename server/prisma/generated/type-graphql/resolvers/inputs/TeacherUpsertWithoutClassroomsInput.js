"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherUpsertWithoutClassroomsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherCreateWithoutClassroomsInput_1 = require("../inputs/TeacherCreateWithoutClassroomsInput");
const TeacherUpdateWithoutClassroomsInput_1 = require("../inputs/TeacherUpdateWithoutClassroomsInput");
let TeacherUpsertWithoutClassroomsInput = class TeacherUpsertWithoutClassroomsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateWithoutClassroomsInput_1.TeacherUpdateWithoutClassroomsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherUpdateWithoutClassroomsInput_1.TeacherUpdateWithoutClassroomsInput)
], TeacherUpsertWithoutClassroomsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateWithoutClassroomsInput_1.TeacherCreateWithoutClassroomsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherCreateWithoutClassroomsInput_1.TeacherCreateWithoutClassroomsInput)
], TeacherUpsertWithoutClassroomsInput.prototype, "create", void 0);
TeacherUpsertWithoutClassroomsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherUpsertWithoutClassroomsInput", {
        isAbstract: true
    })
], TeacherUpsertWithoutClassroomsInput);
exports.TeacherUpsertWithoutClassroomsInput = TeacherUpsertWithoutClassroomsInput;
