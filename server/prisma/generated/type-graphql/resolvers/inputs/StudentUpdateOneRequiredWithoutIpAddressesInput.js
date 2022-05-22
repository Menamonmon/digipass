"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentUpdateOneRequiredWithoutIpAddressesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateOrConnectWithoutIpAddressesInput_1 = require("../inputs/StudentCreateOrConnectWithoutIpAddressesInput");
const StudentCreateWithoutIpAddressesInput_1 = require("../inputs/StudentCreateWithoutIpAddressesInput");
const StudentUpdateWithoutIpAddressesInput_1 = require("../inputs/StudentUpdateWithoutIpAddressesInput");
const StudentUpsertWithoutIpAddressesInput_1 = require("../inputs/StudentUpsertWithoutIpAddressesInput");
const StudentWhereUniqueInput_1 = require("../inputs/StudentWhereUniqueInput");
let StudentUpdateOneRequiredWithoutIpAddressesInput = class StudentUpdateOneRequiredWithoutIpAddressesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateWithoutIpAddressesInput_1.StudentCreateWithoutIpAddressesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentCreateWithoutIpAddressesInput_1.StudentCreateWithoutIpAddressesInput)
], StudentUpdateOneRequiredWithoutIpAddressesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateOrConnectWithoutIpAddressesInput_1.StudentCreateOrConnectWithoutIpAddressesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentCreateOrConnectWithoutIpAddressesInput_1.StudentCreateOrConnectWithoutIpAddressesInput)
], StudentUpdateOneRequiredWithoutIpAddressesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpsertWithoutIpAddressesInput_1.StudentUpsertWithoutIpAddressesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentUpsertWithoutIpAddressesInput_1.StudentUpsertWithoutIpAddressesInput)
], StudentUpdateOneRequiredWithoutIpAddressesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereUniqueInput_1.StudentWhereUniqueInput)
], StudentUpdateOneRequiredWithoutIpAddressesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateWithoutIpAddressesInput_1.StudentUpdateWithoutIpAddressesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentUpdateWithoutIpAddressesInput_1.StudentUpdateWithoutIpAddressesInput)
], StudentUpdateOneRequiredWithoutIpAddressesInput.prototype, "update", void 0);
StudentUpdateOneRequiredWithoutIpAddressesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentUpdateOneRequiredWithoutIpAddressesInput", {
        isAbstract: true
    })
], StudentUpdateOneRequiredWithoutIpAddressesInput);
exports.StudentUpdateOneRequiredWithoutIpAddressesInput = StudentUpdateOneRequiredWithoutIpAddressesInput;
