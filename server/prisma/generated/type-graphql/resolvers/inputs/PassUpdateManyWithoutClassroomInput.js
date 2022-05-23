"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateManyWithoutClassroomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateManyClassroomInputEnvelope_1 = require("../inputs/PassCreateManyClassroomInputEnvelope");
const PassCreateOrConnectWithoutClassroomInput_1 = require("../inputs/PassCreateOrConnectWithoutClassroomInput");
const PassCreateWithoutClassroomInput_1 = require("../inputs/PassCreateWithoutClassroomInput");
const PassScalarWhereInput_1 = require("../inputs/PassScalarWhereInput");
const PassUpdateManyWithWhereWithoutClassroomInput_1 = require("../inputs/PassUpdateManyWithWhereWithoutClassroomInput");
const PassUpdateWithWhereUniqueWithoutClassroomInput_1 = require("../inputs/PassUpdateWithWhereUniqueWithoutClassroomInput");
const PassUpsertWithWhereUniqueWithoutClassroomInput_1 = require("../inputs/PassUpsertWithWhereUniqueWithoutClassroomInput");
const PassWhereUniqueInput_1 = require("../inputs/PassWhereUniqueInput");
let PassUpdateManyWithoutClassroomInput = class PassUpdateManyWithoutClassroomInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassCreateWithoutClassroomInput_1.PassCreateWithoutClassroomInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutClassroomInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassCreateOrConnectWithoutClassroomInput_1.PassCreateOrConnectWithoutClassroomInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutClassroomInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassUpsertWithWhereUniqueWithoutClassroomInput_1.PassUpsertWithWhereUniqueWithoutClassroomInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutClassroomInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateManyClassroomInputEnvelope_1.PassCreateManyClassroomInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCreateManyClassroomInputEnvelope_1.PassCreateManyClassroomInputEnvelope)
], PassUpdateManyWithoutClassroomInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereUniqueInput_1.PassWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutClassroomInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereUniqueInput_1.PassWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutClassroomInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereUniqueInput_1.PassWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutClassroomInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereUniqueInput_1.PassWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutClassroomInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassUpdateWithWhereUniqueWithoutClassroomInput_1.PassUpdateWithWhereUniqueWithoutClassroomInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutClassroomInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassUpdateManyWithWhereWithoutClassroomInput_1.PassUpdateManyWithWhereWithoutClassroomInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutClassroomInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassScalarWhereInput_1.PassScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutClassroomInput.prototype, "deleteMany", void 0);
PassUpdateManyWithoutClassroomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateManyWithoutClassroomInput", {
        isAbstract: true
    })
], PassUpdateManyWithoutClassroomInput);
exports.PassUpdateManyWithoutClassroomInput = PassUpdateManyWithoutClassroomInput;
