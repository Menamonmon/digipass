"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateManyWithWhereWithoutStudentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassScalarWhereInput_1 = require("../inputs/PassScalarWhereInput");
const PassUpdateManyMutationInput_1 = require("../inputs/PassUpdateManyMutationInput");
let PassUpdateManyWithWhereWithoutStudentInput = class PassUpdateManyWithWhereWithoutStudentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassScalarWhereInput_1.PassScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassScalarWhereInput_1.PassScalarWhereInput)
], PassUpdateManyWithWhereWithoutStudentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateManyMutationInput_1.PassUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassUpdateManyMutationInput_1.PassUpdateManyMutationInput)
], PassUpdateManyWithWhereWithoutStudentInput.prototype, "data", void 0);
PassUpdateManyWithWhereWithoutStudentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateManyWithWhereWithoutStudentInput", {
        isAbstract: true
    })
], PassUpdateManyWithWhereWithoutStudentInput);
exports.PassUpdateManyWithWhereWithoutStudentInput = PassUpdateManyWithWhereWithoutStudentInput;
