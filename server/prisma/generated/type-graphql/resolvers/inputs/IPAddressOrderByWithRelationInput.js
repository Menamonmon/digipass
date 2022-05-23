"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentOrderByWithRelationInput_1 = require("../inputs/StudentOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let IPAddressOrderByWithRelationInput = class IPAddressOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentOrderByWithRelationInput_1.StudentOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentOrderByWithRelationInput_1.StudentOrderByWithRelationInput)
], IPAddressOrderByWithRelationInput.prototype, "owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressOrderByWithRelationInput.prototype, "ownerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IPAddressOrderByWithRelationInput.prototype, "address", void 0);
IPAddressOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressOrderByWithRelationInput", {
        isAbstract: true
    })
], IPAddressOrderByWithRelationInput);
exports.IPAddressOrderByWithRelationInput = IPAddressOrderByWithRelationInput;
