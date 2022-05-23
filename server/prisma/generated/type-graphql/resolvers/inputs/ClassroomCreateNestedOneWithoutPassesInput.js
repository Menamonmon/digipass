"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomCreateNestedOneWithoutPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateOrConnectWithoutPassesInput_1 = require("../inputs/ClassroomCreateOrConnectWithoutPassesInput");
const ClassroomCreateWithoutPassesInput_1 = require("../inputs/ClassroomCreateWithoutPassesInput");
const ClassroomWhereUniqueInput_1 = require("../inputs/ClassroomWhereUniqueInput");
let ClassroomCreateNestedOneWithoutPassesInput = class ClassroomCreateNestedOneWithoutPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateWithoutPassesInput_1.ClassroomCreateWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomCreateWithoutPassesInput_1.ClassroomCreateWithoutPassesInput)
], ClassroomCreateNestedOneWithoutPassesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateOrConnectWithoutPassesInput_1.ClassroomCreateOrConnectWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomCreateOrConnectWithoutPassesInput_1.ClassroomCreateOrConnectWithoutPassesInput)
], ClassroomCreateNestedOneWithoutPassesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput)
], ClassroomCreateNestedOneWithoutPassesInput.prototype, "connect", void 0);
ClassroomCreateNestedOneWithoutPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomCreateNestedOneWithoutPassesInput", {
        isAbstract: true
    })
], ClassroomCreateNestedOneWithoutPassesInput);
exports.ClassroomCreateNestedOneWithoutPassesInput = ClassroomCreateNestedOneWithoutPassesInput;
