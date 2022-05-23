"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomCreateNestedManyWithoutStudentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateOrConnectWithoutStudentsInput_1 = require("../inputs/ClassroomCreateOrConnectWithoutStudentsInput");
const ClassroomCreateWithoutStudentsInput_1 = require("../inputs/ClassroomCreateWithoutStudentsInput");
const ClassroomWhereUniqueInput_1 = require("../inputs/ClassroomWhereUniqueInput");
let ClassroomCreateNestedManyWithoutStudentsInput = class ClassroomCreateNestedManyWithoutStudentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomCreateWithoutStudentsInput_1.ClassroomCreateWithoutStudentsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomCreateNestedManyWithoutStudentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomCreateOrConnectWithoutStudentsInput_1.ClassroomCreateOrConnectWithoutStudentsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomCreateNestedManyWithoutStudentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomCreateNestedManyWithoutStudentsInput.prototype, "connect", void 0);
ClassroomCreateNestedManyWithoutStudentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomCreateNestedManyWithoutStudentsInput", {
        isAbstract: true
    })
], ClassroomCreateNestedManyWithoutStudentsInput);
exports.ClassroomCreateNestedManyWithoutStudentsInput = ClassroomCreateNestedManyWithoutStudentsInput;
