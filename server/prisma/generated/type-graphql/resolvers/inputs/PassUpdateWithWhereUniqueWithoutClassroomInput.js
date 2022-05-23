"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateWithWhereUniqueWithoutClassroomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassUpdateWithoutClassroomInput_1 = require("../inputs/PassUpdateWithoutClassroomInput");
const PassWhereUniqueInput_1 = require("../inputs/PassWhereUniqueInput");
let PassUpdateWithWhereUniqueWithoutClassroomInput = class PassUpdateWithWhereUniqueWithoutClassroomInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereUniqueInput_1.PassWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassWhereUniqueInput_1.PassWhereUniqueInput)
], PassUpdateWithWhereUniqueWithoutClassroomInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassUpdateWithoutClassroomInput_1.PassUpdateWithoutClassroomInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PassUpdateWithoutClassroomInput_1.PassUpdateWithoutClassroomInput)
], PassUpdateWithWhereUniqueWithoutClassroomInput.prototype, "data", void 0);
PassUpdateWithWhereUniqueWithoutClassroomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateWithWhereUniqueWithoutClassroomInput", {
        isAbstract: true
    })
], PassUpdateWithWhereUniqueWithoutClassroomInput);
exports.PassUpdateWithWhereUniqueWithoutClassroomInput = PassUpdateWithWhereUniqueWithoutClassroomInput;
