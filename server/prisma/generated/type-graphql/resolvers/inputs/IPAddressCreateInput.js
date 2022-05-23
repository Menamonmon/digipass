"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateNestedOneWithoutIpAddressesInput_1 = require("../inputs/StudentCreateNestedOneWithoutIpAddressesInput");
let IPAddressCreateInput = class IPAddressCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateNestedOneWithoutIpAddressesInput_1.StudentCreateNestedOneWithoutIpAddressesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentCreateNestedOneWithoutIpAddressesInput_1.StudentCreateNestedOneWithoutIpAddressesInput)
], IPAddressCreateInput.prototype, "owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IPAddressCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressCreateInput.prototype, "address", void 0);
IPAddressCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressCreateInput", {
        isAbstract: true
    })
], IPAddressCreateInput);
exports.IPAddressCreateInput = IPAddressCreateInput;
