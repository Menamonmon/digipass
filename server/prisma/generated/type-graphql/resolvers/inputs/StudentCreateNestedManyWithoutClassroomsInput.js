"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCreateNestedManyWithoutClassroomsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateOrConnectWithoutClassroomsInput_1 = require("../inputs/StudentCreateOrConnectWithoutClassroomsInput");
const StudentCreateWithoutClassroomsInput_1 = require("../inputs/StudentCreateWithoutClassroomsInput");
const StudentWhereUniqueInput_1 = require("../inputs/StudentWhereUniqueInput");
let StudentCreateNestedManyWithoutClassroomsInput = class StudentCreateNestedManyWithoutClassroomsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentCreateWithoutClassroomsInput_1.StudentCreateWithoutClassroomsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentCreateNestedManyWithoutClassroomsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentCreateOrConnectWithoutClassroomsInput_1.StudentCreateOrConnectWithoutClassroomsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentCreateNestedManyWithoutClassroomsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentWhereUniqueInput_1.StudentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StudentCreateNestedManyWithoutClassroomsInput.prototype, "connect", void 0);
StudentCreateNestedManyWithoutClassroomsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentCreateNestedManyWithoutClassroomsInput", {
        isAbstract: true
    })
], StudentCreateNestedManyWithoutClassroomsInput);
exports.StudentCreateNestedManyWithoutClassroomsInput = StudentCreateNestedManyWithoutClassroomsInput;
