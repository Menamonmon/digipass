"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPassArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassOrderByWithRelationInput_1 = require("../../../inputs/PassOrderByWithRelationInput");
const PassWhereInput_1 = require("../../../inputs/PassWhereInput");
const PassWhereUniqueInput_1 = require("../../../inputs/PassWhereUniqueInput");
const PassScalarFieldEnum_1 = require("../../../../enums/PassScalarFieldEnum");
let FindFirstPassArgs = class FindFirstPassArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereInput_1.PassWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassWhereInput_1.PassWhereInput)
], FindFirstPassArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassOrderByWithRelationInput_1.PassOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPassArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassWhereUniqueInput_1.PassWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassWhereUniqueInput_1.PassWhereUniqueInput)
], FindFirstPassArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPassArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPassArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassScalarFieldEnum_1.PassScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPassArgs.prototype, "distinct", void 0);
FindFirstPassArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstPassArgs);
exports.FindFirstPassArgs = FindFirstPassArgs;
