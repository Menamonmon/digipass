"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentUpsertWithoutIpAddressesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateWithoutIpAddressesInput_1 = require("../inputs/StudentCreateWithoutIpAddressesInput");
const StudentUpdateWithoutIpAddressesInput_1 = require("../inputs/StudentUpdateWithoutIpAddressesInput");
let StudentUpsertWithoutIpAddressesInput = class StudentUpsertWithoutIpAddressesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateWithoutIpAddressesInput_1.StudentUpdateWithoutIpAddressesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentUpdateWithoutIpAddressesInput_1.StudentUpdateWithoutIpAddressesInput)
], StudentUpsertWithoutIpAddressesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateWithoutIpAddressesInput_1.StudentCreateWithoutIpAddressesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentCreateWithoutIpAddressesInput_1.StudentCreateWithoutIpAddressesInput)
], StudentUpsertWithoutIpAddressesInput.prototype, "create", void 0);
StudentUpsertWithoutIpAddressesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentUpsertWithoutIpAddressesInput", {
        isAbstract: true
    })
], StudentUpsertWithoutIpAddressesInput);
exports.StudentUpsertWithoutIpAddressesInput = StudentUpsertWithoutIpAddressesInput;
