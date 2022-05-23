"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCreateNestedOneWithoutPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateOrConnectWithoutPassesInput_1 = require("../inputs/StudentCreateOrConnectWithoutPassesInput");
const StudentCreateWithoutPassesInput_1 = require("../inputs/StudentCreateWithoutPassesInput");
const StudentWhereUniqueInput_1 = require("../inputs/StudentWhereUniqueInput");
let StudentCreateNestedOneWithoutPassesInput = class StudentCreateNestedOneWithoutPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateWithoutPassesInput_1.StudentCreateWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentCreateWithoutPassesInput_1.StudentCreateWithoutPassesInput)
], StudentCreateNestedOneWithoutPassesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateOrConnectWithoutPassesInput_1.StudentCreateOrConnectWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentCreateOrConnectWithoutPassesInput_1.StudentCreateOrConnectWithoutPassesInput)
], StudentCreateNestedOneWithoutPassesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereUniqueInput_1.StudentWhereUniqueInput)
], StudentCreateNestedOneWithoutPassesInput.prototype, "connect", void 0);
StudentCreateNestedOneWithoutPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentCreateNestedOneWithoutPassesInput", {
        isAbstract: true
    })
], StudentCreateNestedOneWithoutPassesInput);
exports.StudentCreateNestedOneWithoutPassesInput = StudentCreateNestedOneWithoutPassesInput;
