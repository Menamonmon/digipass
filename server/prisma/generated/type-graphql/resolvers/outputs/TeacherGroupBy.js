"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherAvgAggregate_1 = require("../outputs/TeacherAvgAggregate");
const TeacherCountAggregate_1 = require("../outputs/TeacherCountAggregate");
const TeacherMaxAggregate_1 = require("../outputs/TeacherMaxAggregate");
const TeacherMinAggregate_1 = require("../outputs/TeacherMinAggregate");
const TeacherSumAggregate_1 = require("../outputs/TeacherSumAggregate");
let TeacherGroupBy = class TeacherGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TeacherGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherGroupBy.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherGroupBy.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherGroupBy.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeacherGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeacherGroupBy.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCountAggregate_1.TeacherCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherCountAggregate_1.TeacherCountAggregate)
], TeacherGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherAvgAggregate_1.TeacherAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherAvgAggregate_1.TeacherAvgAggregate)
], TeacherGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherSumAggregate_1.TeacherSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherSumAggregate_1.TeacherSumAggregate)
], TeacherGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherMinAggregate_1.TeacherMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherMinAggregate_1.TeacherMinAggregate)
], TeacherGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherMaxAggregate_1.TeacherMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherMaxAggregate_1.TeacherMaxAggregate)
], TeacherGroupBy.prototype, "_max", void 0);
TeacherGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeacherGroupBy", {
        isAbstract: true
    })
], TeacherGroupBy);
exports.TeacherGroupBy = TeacherGroupBy;
