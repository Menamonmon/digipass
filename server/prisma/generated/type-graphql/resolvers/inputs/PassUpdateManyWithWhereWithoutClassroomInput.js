"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateManyWithWhereWithoutClassroomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassScalarWhereInput_1 = require("../inputs/PassScalarWhereInput");
const PassUpdateManyMutationInput_1 = require("../inputs/PassUpdateManyMutationInput");
let PassUpdateManyWithWhereWithoutClassroomInput = class PassUpdateManyWithWhereWithoutClassroomInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassScalarWhereInput_1.PassScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassScalarWhereInput_1.PassScalarWhereInput)
], PassUpdateManyWithWhereWithoutClassroomInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateManyMutationInput_1.PassUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassUpdateManyMutationInput_1.PassUpdateManyMutationInput)
], PassUpdateManyWithWhereWithoutClassroomInput.prototype, "data", void 0);
PassUpdateManyWithWhereWithoutClassroomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateManyWithWhereWithoutClassroomInput", {
        isAbstract: true
    })
], PassUpdateManyWithWhereWithoutClassroomInput);
exports.PassUpdateManyWithWhereWithoutClassroomInput = PassUpdateManyWithWhereWithoutClassroomInput;
