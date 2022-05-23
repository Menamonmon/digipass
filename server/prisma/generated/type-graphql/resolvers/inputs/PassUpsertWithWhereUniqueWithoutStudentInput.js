"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpsertWithWhereUniqueWithoutStudentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateWithoutStudentInput_1 = require("../inputs/PassCreateWithoutStudentInput");
const PassUpdateWithoutStudentInput_1 = require("../inputs/PassUpdateWithoutStudentInput");
const PassWhereUniqueInput_1 = require("../inputs/PassWhereUniqueInput");
let PassUpsertWithWhereUniqueWithoutStudentInput = class PassUpsertWithWhereUniqueWithoutStudentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereUniqueInput_1.PassWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassWhereUniqueInput_1.PassWhereUniqueInput)
], PassUpsertWithWhereUniqueWithoutStudentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateWithoutStudentInput_1.PassUpdateWithoutStudentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassUpdateWithoutStudentInput_1.PassUpdateWithoutStudentInput)
], PassUpsertWithWhereUniqueWithoutStudentInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateWithoutStudentInput_1.PassCreateWithoutStudentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassCreateWithoutStudentInput_1.PassCreateWithoutStudentInput)
], PassUpsertWithWhereUniqueWithoutStudentInput.prototype, "create", void 0);
PassUpsertWithWhereUniqueWithoutStudentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpsertWithWhereUniqueWithoutStudentInput", {
        isAbstract: true
    })
], PassUpsertWithWhereUniqueWithoutStudentInput);
exports.PassUpsertWithWhereUniqueWithoutStudentInput = PassUpsertWithWhereUniqueWithoutStudentInput;
