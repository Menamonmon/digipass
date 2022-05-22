"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentUpdateManyWithWhereWithoutClassroomsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentScalarWhereInput_1 = require("../inputs/StudentScalarWhereInput");
const StudentUpdateManyMutationInput_1 = require("../inputs/StudentUpdateManyMutationInput");
let StudentUpdateManyWithWhereWithoutClassroomsInput = class StudentUpdateManyWithWhereWithoutClassroomsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentScalarWhereInput_1.StudentScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentScalarWhereInput_1.StudentScalarWhereInput)
], StudentUpdateManyWithWhereWithoutClassroomsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateManyMutationInput_1.StudentUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentUpdateManyMutationInput_1.StudentUpdateManyMutationInput)
], StudentUpdateManyWithWhereWithoutClassroomsInput.prototype, "data", void 0);
StudentUpdateManyWithWhereWithoutClassroomsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentUpdateManyWithWhereWithoutClassroomsInput", {
        isAbstract: true
    })
], StudentUpdateManyWithWhereWithoutClassroomsInput);
exports.StudentUpdateManyWithWhereWithoutClassroomsInput = StudentUpdateManyWithWhereWithoutClassroomsInput;
