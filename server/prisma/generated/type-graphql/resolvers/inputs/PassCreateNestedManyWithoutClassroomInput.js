"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassCreateNestedManyWithoutClassroomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateManyClassroomInputEnvelope_1 = require("../inputs/PassCreateManyClassroomInputEnvelope");
const PassCreateOrConnectWithoutClassroomInput_1 = require("../inputs/PassCreateOrConnectWithoutClassroomInput");
const PassCreateWithoutClassroomInput_1 = require("../inputs/PassCreateWithoutClassroomInput");
const PassWhereUniqueInput_1 = require("../inputs/PassWhereUniqueInput");
let PassCreateNestedManyWithoutClassroomInput = class PassCreateNestedManyWithoutClassroomInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassCreateWithoutClassroomInput_1.PassCreateWithoutClassroomInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassCreateNestedManyWithoutClassroomInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassCreateOrConnectWithoutClassroomInput_1.PassCreateOrConnectWithoutClassroomInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassCreateNestedManyWithoutClassroomInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCreateManyClassroomInputEnvelope_1.PassCreateManyClassroomInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCreateManyClassroomInputEnvelope_1.PassCreateManyClassroomInputEnvelope)
], PassCreateNestedManyWithoutClassroomInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassWhereUniqueInput_1.PassWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PassCreateNestedManyWithoutClassroomInput.prototype, "connect", void 0);
PassCreateNestedManyWithoutClassroomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassCreateNestedManyWithoutClassroomInput", {
        isAbstract: true
    })
], PassCreateNestedManyWithoutClassroomInput);
exports.PassCreateNestedManyWithoutClassroomInput = PassCreateNestedManyWithoutClassroomInput;
