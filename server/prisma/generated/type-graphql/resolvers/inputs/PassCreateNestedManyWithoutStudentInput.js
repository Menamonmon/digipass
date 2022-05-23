"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassCreateNestedManyWithoutStudentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateManyStudentInputEnvelope_1 = require("../inputs/PassCreateManyStudentInputEnvelope");
const PassCreateOrConnectWithoutStudentInput_1 = require("../inputs/PassCreateOrConnectWithoutStudentInput");
const PassCreateWithoutStudentInput_1 = require("../inputs/PassCreateWithoutStudentInput");
const PassWhereUniqueInput_1 = require("../inputs/PassWhereUniqueInput");
let PassCreateNestedManyWithoutStudentInput = class PassCreateNestedManyWithoutStudentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassCreateWithoutStudentInput_1.PassCreateWithoutStudentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassCreateNestedManyWithoutStudentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassCreateOrConnectWithoutStudentInput_1.PassCreateOrConnectWithoutStudentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassCreateNestedManyWithoutStudentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateManyStudentInputEnvelope_1.PassCreateManyStudentInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCreateManyStudentInputEnvelope_1.PassCreateManyStudentInputEnvelope)
], PassCreateNestedManyWithoutStudentInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereUniqueInput_1.PassWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassCreateNestedManyWithoutStudentInput.prototype, "connect", void 0);
PassCreateNestedManyWithoutStudentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassCreateNestedManyWithoutStudentInput", {
        isAbstract: true
    })
], PassCreateNestedManyWithoutStudentInput);
exports.PassCreateNestedManyWithoutStudentInput = PassCreateNestedManyWithoutStudentInput;
