"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateManyWithoutStudentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateManyStudentInputEnvelope_1 = require("../inputs/PassCreateManyStudentInputEnvelope");
const PassCreateOrConnectWithoutStudentInput_1 = require("../inputs/PassCreateOrConnectWithoutStudentInput");
const PassCreateWithoutStudentInput_1 = require("../inputs/PassCreateWithoutStudentInput");
const PassScalarWhereInput_1 = require("../inputs/PassScalarWhereInput");
const PassUpdateManyWithWhereWithoutStudentInput_1 = require("../inputs/PassUpdateManyWithWhereWithoutStudentInput");
const PassUpdateWithWhereUniqueWithoutStudentInput_1 = require("../inputs/PassUpdateWithWhereUniqueWithoutStudentInput");
const PassUpsertWithWhereUniqueWithoutStudentInput_1 = require("../inputs/PassUpsertWithWhereUniqueWithoutStudentInput");
const PassWhereUniqueInput_1 = require("../inputs/PassWhereUniqueInput");
let PassUpdateManyWithoutStudentInput = class PassUpdateManyWithoutStudentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassCreateWithoutStudentInput_1.PassCreateWithoutStudentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutStudentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassCreateOrConnectWithoutStudentInput_1.PassCreateOrConnectWithoutStudentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutStudentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassUpsertWithWhereUniqueWithoutStudentInput_1.PassUpsertWithWhereUniqueWithoutStudentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutStudentInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateManyStudentInputEnvelope_1.PassCreateManyStudentInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCreateManyStudentInputEnvelope_1.PassCreateManyStudentInputEnvelope)
], PassUpdateManyWithoutStudentInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereUniqueInput_1.PassWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutStudentInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereUniqueInput_1.PassWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutStudentInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereUniqueInput_1.PassWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutStudentInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereUniqueInput_1.PassWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutStudentInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassUpdateWithWhereUniqueWithoutStudentInput_1.PassUpdateWithWhereUniqueWithoutStudentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutStudentInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassUpdateManyWithWhereWithoutStudentInput_1.PassUpdateManyWithWhereWithoutStudentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutStudentInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassScalarWhereInput_1.PassScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassUpdateManyWithoutStudentInput.prototype, "deleteMany", void 0);
PassUpdateManyWithoutStudentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateManyWithoutStudentInput", {
        isAbstract: true
    })
], PassUpdateManyWithoutStudentInput);
exports.PassUpdateManyWithoutStudentInput = PassUpdateManyWithoutStudentInput;
