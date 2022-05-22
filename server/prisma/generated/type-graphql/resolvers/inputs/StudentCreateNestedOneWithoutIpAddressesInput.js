"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCreateNestedOneWithoutIpAddressesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateOrConnectWithoutIpAddressesInput_1 = require("../inputs/StudentCreateOrConnectWithoutIpAddressesInput");
const StudentCreateWithoutIpAddressesInput_1 = require("../inputs/StudentCreateWithoutIpAddressesInput");
const StudentWhereUniqueInput_1 = require("../inputs/StudentWhereUniqueInput");
let StudentCreateNestedOneWithoutIpAddressesInput = class StudentCreateNestedOneWithoutIpAddressesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateWithoutIpAddressesInput_1.StudentCreateWithoutIpAddressesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentCreateWithoutIpAddressesInput_1.StudentCreateWithoutIpAddressesInput)
], StudentCreateNestedOneWithoutIpAddressesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateOrConnectWithoutIpAddressesInput_1.StudentCreateOrConnectWithoutIpAddressesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentCreateOrConnectWithoutIpAddressesInput_1.StudentCreateOrConnectWithoutIpAddressesInput)
], StudentCreateNestedOneWithoutIpAddressesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereUniqueInput_1.StudentWhereUniqueInput)
], StudentCreateNestedOneWithoutIpAddressesInput.prototype, "connect", void 0);
StudentCreateNestedOneWithoutIpAddressesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentCreateNestedOneWithoutIpAddressesInput", {
        isAbstract: true
    })
], StudentCreateNestedOneWithoutIpAddressesInput);
exports.StudentCreateNestedOneWithoutIpAddressesInput = StudentCreateNestedOneWithoutIpAddressesInput;
