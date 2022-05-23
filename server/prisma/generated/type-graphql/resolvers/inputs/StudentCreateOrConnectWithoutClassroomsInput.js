"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCreateOrConnectWithoutClassroomsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateWithoutClassroomsInput_1 = require("../inputs/StudentCreateWithoutClassroomsInput");
const StudentWhereUniqueInput_1 = require("../inputs/StudentWhereUniqueInput");
let StudentCreateOrConnectWithoutClassroomsInput = class StudentCreateOrConnectWithoutClassroomsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentWhereUniqueInput_1.StudentWhereUniqueInput)
], StudentCreateOrConnectWithoutClassroomsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateWithoutClassroomsInput_1.StudentCreateWithoutClassroomsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentCreateWithoutClassroomsInput_1.StudentCreateWithoutClassroomsInput)
], StudentCreateOrConnectWithoutClassroomsInput.prototype, "create", void 0);
StudentCreateOrConnectWithoutClassroomsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentCreateOrConnectWithoutClassroomsInput", {
        isAbstract: true
    })
], StudentCreateOrConnectWithoutClassroomsInput);
exports.StudentCreateOrConnectWithoutClassroomsInput = StudentCreateOrConnectWithoutClassroomsInput;
