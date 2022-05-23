"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCreateOrConnectWithoutIpAddressesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateWithoutIpAddressesInput_1 = require("../inputs/StudentCreateWithoutIpAddressesInput");
const StudentWhereUniqueInput_1 = require("../inputs/StudentWhereUniqueInput");
let StudentCreateOrConnectWithoutIpAddressesInput = class StudentCreateOrConnectWithoutIpAddressesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentWhereUniqueInput_1.StudentWhereUniqueInput)
], StudentCreateOrConnectWithoutIpAddressesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateWithoutIpAddressesInput_1.StudentCreateWithoutIpAddressesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentCreateWithoutIpAddressesInput_1.StudentCreateWithoutIpAddressesInput)
], StudentCreateOrConnectWithoutIpAddressesInput.prototype, "create", void 0);
StudentCreateOrConnectWithoutIpAddressesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentCreateOrConnectWithoutIpAddressesInput", {
        isAbstract: true
    })
], StudentCreateOrConnectWithoutIpAddressesInput);
exports.StudentCreateOrConnectWithoutIpAddressesInput = StudentCreateOrConnectWithoutIpAddressesInput;
