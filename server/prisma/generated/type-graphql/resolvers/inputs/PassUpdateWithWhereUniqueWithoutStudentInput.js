"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateWithWhereUniqueWithoutStudentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassUpdateWithoutStudentInput_1 = require("../inputs/PassUpdateWithoutStudentInput");
const PassWhereUniqueInput_1 = require("../inputs/PassWhereUniqueInput");
let PassUpdateWithWhereUniqueWithoutStudentInput = class PassUpdateWithWhereUniqueWithoutStudentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereUniqueInput_1.PassWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassWhereUniqueInput_1.PassWhereUniqueInput)
], PassUpdateWithWhereUniqueWithoutStudentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateWithoutStudentInput_1.PassUpdateWithoutStudentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassUpdateWithoutStudentInput_1.PassUpdateWithoutStudentInput)
], PassUpdateWithWhereUniqueWithoutStudentInput.prototype, "data", void 0);
PassUpdateWithWhereUniqueWithoutStudentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateWithWhereUniqueWithoutStudentInput", {
        isAbstract: true
    })
], PassUpdateWithWhereUniqueWithoutStudentInput);
exports.PassUpdateWithWhereUniqueWithoutStudentInput = PassUpdateWithWhereUniqueWithoutStudentInput;
