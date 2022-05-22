"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassCreateOrConnectWithoutStudentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateWithoutStudentInput_1 = require("../inputs/PassCreateWithoutStudentInput");
const PassWhereUniqueInput_1 = require("../inputs/PassWhereUniqueInput");
let PassCreateOrConnectWithoutStudentInput = class PassCreateOrConnectWithoutStudentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereUniqueInput_1.PassWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassWhereUniqueInput_1.PassWhereUniqueInput)
], PassCreateOrConnectWithoutStudentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateWithoutStudentInput_1.PassCreateWithoutStudentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassCreateWithoutStudentInput_1.PassCreateWithoutStudentInput)
], PassCreateOrConnectWithoutStudentInput.prototype, "create", void 0);
PassCreateOrConnectWithoutStudentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassCreateOrConnectWithoutStudentInput", {
        isAbstract: true
    })
], PassCreateOrConnectWithoutStudentInput);
exports.PassCreateOrConnectWithoutStudentInput = PassCreateOrConnectWithoutStudentInput;
