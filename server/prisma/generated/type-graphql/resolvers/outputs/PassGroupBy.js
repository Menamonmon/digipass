"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassAvgAggregate_1 = require("../outputs/PassAvgAggregate");
const PassCountAggregate_1 = require("../outputs/PassCountAggregate");
const PassMaxAggregate_1 = require("../outputs/PassMaxAggregate");
const PassMinAggregate_1 = require("../outputs/PassMinAggregate");
const PassSumAggregate_1 = require("../outputs/PassSumAggregate");
let PassGroupBy = class PassGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PassGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PassGroupBy.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PassGroupBy.prototype, "classId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PassGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PassGroupBy.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PassGroupBy.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PassGroupBy.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PassGroupBy.prototype, "issuerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassCountAggregate_1.PassCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassCountAggregate_1.PassCountAggregate)
], PassGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassAvgAggregate_1.PassAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassAvgAggregate_1.PassAvgAggregate)
], PassGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassSumAggregate_1.PassSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassSumAggregate_1.PassSumAggregate)
], PassGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassMinAggregate_1.PassMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassMinAggregate_1.PassMinAggregate)
], PassGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PassMaxAggregate_1.PassMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PassMaxAggregate_1.PassMaxAggregate)
], PassGroupBy.prototype, "_max", void 0);
PassGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PassGroupBy", {
        isAbstract: true
    })
], PassGroupBy);
exports.PassGroupBy = PassGroupBy;
