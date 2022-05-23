"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassWhereInput_1 = require("../inputs/PassWhereInput");
let PassListRelationFilter = class PassListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereInput_1.PassWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassWhereInput_1.PassWhereInput)
], PassListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereInput_1.PassWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassWhereInput_1.PassWhereInput)
], PassListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereInput_1.PassWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassWhereInput_1.PassWhereInput)
], PassListRelationFilter.prototype, "none", void 0);
PassListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("PassListRelationFilter", {
        isAbstract: true
    })
], PassListRelationFilter);
exports.PassListRelationFilter = PassListRelationFilter;
