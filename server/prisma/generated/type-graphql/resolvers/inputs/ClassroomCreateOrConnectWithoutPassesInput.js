"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomCreateOrConnectWithoutPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateWithoutPassesInput_1 = require("../inputs/ClassroomCreateWithoutPassesInput");
const ClassroomWhereUniqueInput_1 = require("../inputs/ClassroomWhereUniqueInput");
let ClassroomCreateOrConnectWithoutPassesInput = class ClassroomCreateOrConnectWithoutPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput)
], ClassroomCreateOrConnectWithoutPassesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateWithoutPassesInput_1.ClassroomCreateWithoutPassesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomCreateWithoutPassesInput_1.ClassroomCreateWithoutPassesInput)
], ClassroomCreateOrConnectWithoutPassesInput.prototype, "create", void 0);
ClassroomCreateOrConnectWithoutPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomCreateOrConnectWithoutPassesInput", {
        isAbstract: true
    })
], ClassroomCreateOrConnectWithoutPassesInput);
exports.ClassroomCreateOrConnectWithoutPassesInput = ClassroomCreateOrConnectWithoutPassesInput;
