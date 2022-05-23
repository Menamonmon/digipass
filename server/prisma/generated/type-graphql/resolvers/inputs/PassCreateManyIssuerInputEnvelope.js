"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassCreateManyIssuerInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateManyIssuerInput_1 = require("../inputs/PassCreateManyIssuerInput");
let PassCreateManyIssuerInputEnvelope = class PassCreateManyIssuerInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassCreateManyIssuerInput_1.PassCreateManyIssuerInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PassCreateManyIssuerInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PassCreateManyIssuerInputEnvelope.prototype, "skipDuplicates", void 0);
PassCreateManyIssuerInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PassCreateManyIssuerInputEnvelope", {
        isAbstract: true
    })
], PassCreateManyIssuerInputEnvelope);
exports.PassCreateManyIssuerInputEnvelope = PassCreateManyIssuerInputEnvelope;
