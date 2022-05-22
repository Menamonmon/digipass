"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomUpdateWithWhereUniqueWithoutStudentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomUpdateWithoutStudentsInput_1 = require("../inputs/ClassroomUpdateWithoutStudentsInput");
const ClassroomWhereUniqueInput_1 = require("../inputs/ClassroomWhereUniqueInput");
let ClassroomUpdateWithWhereUniqueWithoutStudentsInput = class ClassroomUpdateWithWhereUniqueWithoutStudentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput)
], ClassroomUpdateWithWhereUniqueWithoutStudentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateWithoutStudentsInput_1.ClassroomUpdateWithoutStudentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateWithoutStudentsInput_1.ClassroomUpdateWithoutStudentsInput)
], ClassroomUpdateWithWhereUniqueWithoutStudentsInput.prototype, "data", void 0);
ClassroomUpdateWithWhereUniqueWithoutStudentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomUpdateWithWhereUniqueWithoutStudentsInput", {
        isAbstract: true
    })
], ClassroomUpdateWithWhereUniqueWithoutStudentsInput);
exports.ClassroomUpdateWithWhereUniqueWithoutStudentsInput = ClassroomUpdateWithWhereUniqueWithoutStudentsInput;
