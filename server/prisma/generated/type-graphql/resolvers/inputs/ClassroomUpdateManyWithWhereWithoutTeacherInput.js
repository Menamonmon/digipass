"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomUpdateManyWithWhereWithoutTeacherInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomScalarWhereInput_1 = require("../inputs/ClassroomScalarWhereInput");
const ClassroomUpdateManyMutationInput_1 = require("../inputs/ClassroomUpdateManyMutationInput");
let ClassroomUpdateManyWithWhereWithoutTeacherInput = class ClassroomUpdateManyWithWhereWithoutTeacherInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomScalarWhereInput_1.ClassroomScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomScalarWhereInput_1.ClassroomScalarWhereInput)
], ClassroomUpdateManyWithWhereWithoutTeacherInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateManyMutationInput_1.ClassroomUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateManyMutationInput_1.ClassroomUpdateManyMutationInput)
], ClassroomUpdateManyWithWhereWithoutTeacherInput.prototype, "data", void 0);
ClassroomUpdateManyWithWhereWithoutTeacherInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomUpdateManyWithWhereWithoutTeacherInput", {
        isAbstract: true
    })
], ClassroomUpdateManyWithWhereWithoutTeacherInput);
exports.ClassroomUpdateManyWithWhereWithoutTeacherInput = ClassroomUpdateManyWithWhereWithoutTeacherInput;
