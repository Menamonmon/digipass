"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateManyWithWhereWithoutIssuerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassScalarWhereInput_1 = require("../inputs/PassScalarWhereInput");
const PassUpdateManyMutationInput_1 = require("../inputs/PassUpdateManyMutationInput");
let PassUpdateManyWithWhereWithoutIssuerInput = class PassUpdateManyWithWhereWithoutIssuerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassScalarWhereInput_1.PassScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassScalarWhereInput_1.PassScalarWhereInput)
], PassUpdateManyWithWhereWithoutIssuerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateManyMutationInput_1.PassUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassUpdateManyMutationInput_1.PassUpdateManyMutationInput)
], PassUpdateManyWithWhereWithoutIssuerInput.prototype, "data", void 0);
PassUpdateManyWithWhereWithoutIssuerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateManyWithWhereWithoutIssuerInput", {
        isAbstract: true
    })
], PassUpdateManyWithWhereWithoutIssuerInput);
exports.PassUpdateManyWithWhereWithoutIssuerInput = PassUpdateManyWithWhereWithoutIssuerInput;
