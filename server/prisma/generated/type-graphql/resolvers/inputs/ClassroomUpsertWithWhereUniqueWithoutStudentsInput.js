"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomUpsertWithWhereUniqueWithoutStudentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateWithoutStudentsInput_1 = require("../inputs/ClassroomCreateWithoutStudentsInput");
const ClassroomUpdateWithoutStudentsInput_1 = require("../inputs/ClassroomUpdateWithoutStudentsInput");
const ClassroomWhereUniqueInput_1 = require("../inputs/ClassroomWhereUniqueInput");
let ClassroomUpsertWithWhereUniqueWithoutStudentsInput = class ClassroomUpsertWithWhereUniqueWithoutStudentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput)
], ClassroomUpsertWithWhereUniqueWithoutStudentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateWithoutStudentsInput_1.ClassroomUpdateWithoutStudentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateWithoutStudentsInput_1.ClassroomUpdateWithoutStudentsInput)
], ClassroomUpsertWithWhereUniqueWithoutStudentsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateWithoutStudentsInput_1.ClassroomCreateWithoutStudentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomCreateWithoutStudentsInput_1.ClassroomCreateWithoutStudentsInput)
], ClassroomUpsertWithWhereUniqueWithoutStudentsInput.prototype, "create", void 0);
ClassroomUpsertWithWhereUniqueWithoutStudentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomUpsertWithWhereUniqueWithoutStudentsInput", {
        isAbstract: true
    })
], ClassroomUpsertWithWhereUniqueWithoutStudentsInput);
exports.ClassroomUpsertWithWhereUniqueWithoutStudentsInput = ClassroomUpsertWithWhereUniqueWithoutStudentsInput;
