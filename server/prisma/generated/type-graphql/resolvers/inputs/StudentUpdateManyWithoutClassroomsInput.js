"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentUpdateManyWithoutClassroomsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateOrConnectWithoutClassroomsInput_1 = require("../inputs/StudentCreateOrConnectWithoutClassroomsInput");
const StudentCreateWithoutClassroomsInput_1 = require("../inputs/StudentCreateWithoutClassroomsInput");
const StudentScalarWhereInput_1 = require("../inputs/StudentScalarWhereInput");
const StudentUpdateManyWithWhereWithoutClassroomsInput_1 = require("../inputs/StudentUpdateManyWithWhereWithoutClassroomsInput");
const StudentUpdateWithWhereUniqueWithoutClassroomsInput_1 = require("../inputs/StudentUpdateWithWhereUniqueWithoutClassroomsInput");
const StudentUpsertWithWhereUniqueWithoutClassroomsInput_1 = require("../inputs/StudentUpsertWithWhereUniqueWithoutClassroomsInput");
const StudentWhereUniqueInput_1 = require("../inputs/StudentWhereUniqueInput");
let StudentUpdateManyWithoutClassroomsInput = class StudentUpdateManyWithoutClassroomsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentCreateWithoutClassroomsInput_1.StudentCreateWithoutClassroomsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentUpdateManyWithoutClassroomsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentCreateOrConnectWithoutClassroomsInput_1.StudentCreateOrConnectWithoutClassroomsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentUpdateManyWithoutClassroomsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentUpsertWithWhereUniqueWithoutClassroomsInput_1.StudentUpsertWithWhereUniqueWithoutClassroomsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentUpdateManyWithoutClassroomsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentWhereUniqueInput_1.StudentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentUpdateManyWithoutClassroomsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentWhereUniqueInput_1.StudentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentUpdateManyWithoutClassroomsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentWhereUniqueInput_1.StudentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentUpdateManyWithoutClassroomsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentWhereUniqueInput_1.StudentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentUpdateManyWithoutClassroomsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentUpdateWithWhereUniqueWithoutClassroomsInput_1.StudentUpdateWithWhereUniqueWithoutClassroomsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentUpdateManyWithoutClassroomsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentUpdateManyWithWhereWithoutClassroomsInput_1.StudentUpdateManyWithWhereWithoutClassroomsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentUpdateManyWithoutClassroomsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentScalarWhereInput_1.StudentScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentUpdateManyWithoutClassroomsInput.prototype, "deleteMany", void 0);
StudentUpdateManyWithoutClassroomsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentUpdateManyWithoutClassroomsInput", {
        isAbstract: true
    })
], StudentUpdateManyWithoutClassroomsInput);
exports.StudentUpdateManyWithoutClassroomsInput = StudentUpdateManyWithoutClassroomsInput;
