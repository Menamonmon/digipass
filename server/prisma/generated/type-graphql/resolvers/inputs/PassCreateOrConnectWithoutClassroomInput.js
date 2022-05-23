"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassCreateOrConnectWithoutClassroomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateWithoutClassroomInput_1 = require("../inputs/PassCreateWithoutClassroomInput");
const PassWhereUniqueInput_1 = require("../inputs/PassWhereUniqueInput");
let PassCreateOrConnectWithoutClassroomInput = class PassCreateOrConnectWithoutClassroomInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereUniqueInput_1.PassWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassWhereUniqueInput_1.PassWhereUniqueInput)
], PassCreateOrConnectWithoutClassroomInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateWithoutClassroomInput_1.PassCreateWithoutClassroomInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassCreateWithoutClassroomInput_1.PassCreateWithoutClassroomInput)
], PassCreateOrConnectWithoutClassroomInput.prototype, "create", void 0);
PassCreateOrConnectWithoutClassroomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassCreateOrConnectWithoutClassroomInput", {
        isAbstract: true
    })
], PassCreateOrConnectWithoutClassroomInput);
exports.PassCreateOrConnectWithoutClassroomInput = PassCreateOrConnectWithoutClassroomInput;
