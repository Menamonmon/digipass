"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherUpdateOneRequiredWithoutClassroomsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherCreateOrConnectWithoutClassroomsInput_1 = require("../inputs/TeacherCreateOrConnectWithoutClassroomsInput");
const TeacherCreateWithoutClassroomsInput_1 = require("../inputs/TeacherCreateWithoutClassroomsInput");
const TeacherUpdateWithoutClassroomsInput_1 = require("../inputs/TeacherUpdateWithoutClassroomsInput");
const TeacherUpsertWithoutClassroomsInput_1 = require("../inputs/TeacherUpsertWithoutClassroomsInput");
const TeacherWhereUniqueInput_1 = require("../inputs/TeacherWhereUniqueInput");
let TeacherUpdateOneRequiredWithoutClassroomsInput = class TeacherUpdateOneRequiredWithoutClassroomsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateWithoutClassroomsInput_1.TeacherCreateWithoutClassroomsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherCreateWithoutClassroomsInput_1.TeacherCreateWithoutClassroomsInput)
], TeacherUpdateOneRequiredWithoutClassroomsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateOrConnectWithoutClassroomsInput_1.TeacherCreateOrConnectWithoutClassroomsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherCreateOrConnectWithoutClassroomsInput_1.TeacherCreateOrConnectWithoutClassroomsInput)
], TeacherUpdateOneRequiredWithoutClassroomsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpsertWithoutClassroomsInput_1.TeacherUpsertWithoutClassroomsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherUpsertWithoutClassroomsInput_1.TeacherUpsertWithoutClassroomsInput)
], TeacherUpdateOneRequiredWithoutClassroomsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereUniqueInput_1.TeacherWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherWhereUniqueInput_1.TeacherWhereUniqueInput)
], TeacherUpdateOneRequiredWithoutClassroomsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateWithoutClassroomsInput_1.TeacherUpdateWithoutClassroomsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherUpdateWithoutClassroomsInput_1.TeacherUpdateWithoutClassroomsInput)
], TeacherUpdateOneRequiredWithoutClassroomsInput.prototype, "update", void 0);
TeacherUpdateOneRequiredWithoutClassroomsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherUpdateOneRequiredWithoutClassroomsInput", {
        isAbstract: true
    })
], TeacherUpdateOneRequiredWithoutClassroomsInput);
exports.TeacherUpdateOneRequiredWithoutClassroomsInput = TeacherUpdateOneRequiredWithoutClassroomsInput;
