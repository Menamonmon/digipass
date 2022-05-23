"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpsertWithWhereUniqueWithoutClassroomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateWithoutClassroomInput_1 = require("../inputs/PassCreateWithoutClassroomInput");
const PassUpdateWithoutClassroomInput_1 = require("../inputs/PassUpdateWithoutClassroomInput");
const PassWhereUniqueInput_1 = require("../inputs/PassWhereUniqueInput");
let PassUpsertWithWhereUniqueWithoutClassroomInput = class PassUpsertWithWhereUniqueWithoutClassroomInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereUniqueInput_1.PassWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassWhereUniqueInput_1.PassWhereUniqueInput)
], PassUpsertWithWhereUniqueWithoutClassroomInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateWithoutClassroomInput_1.PassUpdateWithoutClassroomInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassUpdateWithoutClassroomInput_1.PassUpdateWithoutClassroomInput)
], PassUpsertWithWhereUniqueWithoutClassroomInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateWithoutClassroomInput_1.PassCreateWithoutClassroomInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassCreateWithoutClassroomInput_1.PassCreateWithoutClassroomInput)
], PassUpsertWithWhereUniqueWithoutClassroomInput.prototype, "create", void 0);
PassUpsertWithWhereUniqueWithoutClassroomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpsertWithWhereUniqueWithoutClassroomInput", {
        isAbstract: true
    })
], PassUpsertWithWhereUniqueWithoutClassroomInput);
exports.PassUpsertWithWhereUniqueWithoutClassroomInput = PassUpsertWithWhereUniqueWithoutClassroomInput;
