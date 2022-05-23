"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAddressListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IPAddressWhereInput_1 = require("../inputs/IPAddressWhereInput");
let IPAddressListRelationFilter = class IPAddressListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressWhereInput_1.IPAddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressWhereInput_1.IPAddressWhereInput)
], IPAddressListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressWhereInput_1.IPAddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressWhereInput_1.IPAddressWhereInput)
], IPAddressListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IPAddressWhereInput_1.IPAddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IPAddressWhereInput_1.IPAddressWhereInput)
], IPAddressListRelationFilter.prototype, "none", void 0);
IPAddressListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("IPAddressListRelationFilter", {
        isAbstract: true
    })
], IPAddressListRelationFilter);
exports.IPAddressListRelationFilter = IPAddressListRelationFilter;
