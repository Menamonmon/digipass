"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentAvgAggregate_1 = require("../outputs/StudentAvgAggregate");
const StudentCountAggregate_1 = require("../outputs/StudentCountAggregate");
const StudentMaxAggregate_1 = require("../outputs/StudentMaxAggregate");
const StudentMinAggregate_1 = require("../outputs/StudentMinAggregate");
const StudentSumAggregate_1 = require("../outputs/StudentSumAggregate");
let StudentGroupBy = class StudentGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], StudentGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StudentGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StudentGroupBy.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StudentGroupBy.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StudentGroupBy.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], StudentGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], StudentGroupBy.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StudentGroupBy.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], StudentGroupBy.prototype, "passesUsed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCountAggregate_1.StudentCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentCountAggregate_1.StudentCountAggregate)
], StudentGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentAvgAggregate_1.StudentAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentAvgAggregate_1.StudentAvgAggregate)
], StudentGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentSumAggregate_1.StudentSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentSumAggregate_1.StudentSumAggregate)
], StudentGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentMinAggregate_1.StudentMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentMinAggregate_1.StudentMinAggregate)
], StudentGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentMaxAggregate_1.StudentMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentMaxAggregate_1.StudentMaxAggregate)
], StudentGroupBy.prototype, "_max", void 0);
StudentGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StudentGroupBy", {
        isAbstract: true
    })
], StudentGroupBy);
exports.StudentGroupBy = StudentGroupBy;
