"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStudent = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentAvgAggregate_1 = require("../outputs/StudentAvgAggregate");
const StudentCountAggregate_1 = require("../outputs/StudentCountAggregate");
const StudentMaxAggregate_1 = require("../outputs/StudentMaxAggregate");
const StudentMinAggregate_1 = require("../outputs/StudentMinAggregate");
const StudentSumAggregate_1 = require("../outputs/StudentSumAggregate");
let AggregateStudent = class AggregateStudent {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCountAggregate_1.StudentCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentCountAggregate_1.StudentCountAggregate)
], AggregateStudent.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentAvgAggregate_1.StudentAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentAvgAggregate_1.StudentAvgAggregate)
], AggregateStudent.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentSumAggregate_1.StudentSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentSumAggregate_1.StudentSumAggregate)
], AggregateStudent.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentMinAggregate_1.StudentMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentMinAggregate_1.StudentMinAggregate)
], AggregateStudent.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentMaxAggregate_1.StudentMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentMaxAggregate_1.StudentMaxAggregate)
], AggregateStudent.prototype, "_max", void 0);
AggregateStudent = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateStudent", {
        isAbstract: true
    })
], AggregateStudent);
exports.AggregateStudent = AggregateStudent;
