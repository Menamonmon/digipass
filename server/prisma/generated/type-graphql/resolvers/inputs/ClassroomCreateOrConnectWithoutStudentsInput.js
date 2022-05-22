"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomCreateOrConnectWithoutStudentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateWithoutStudentsInput_1 = require("../inputs/ClassroomCreateWithoutStudentsInput");
const ClassroomWhereUniqueInput_1 = require("../inputs/ClassroomWhereUniqueInput");
let ClassroomCreateOrConnectWithoutStudentsInput = class ClassroomCreateOrConnectWithoutStudentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput)
], ClassroomCreateOrConnectWithoutStudentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateWithoutStudentsInput_1.ClassroomCreateWithoutStudentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomCreateWithoutStudentsInput_1.ClassroomCreateWithoutStudentsInput)
], ClassroomCreateOrConnectWithoutStudentsInput.prototype, "create", void 0);
ClassroomCreateOrConnectWithoutStudentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomCreateOrConnectWithoutStudentsInput", {
        isAbstract: true
    })
], ClassroomCreateOrConnectWithoutStudentsInput);
exports.ClassroomCreateOrConnectWithoutStudentsInput = ClassroomCreateOrConnectWithoutStudentsInput;
