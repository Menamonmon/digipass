"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTeacher = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherAvgAggregate_1 = require("../outputs/TeacherAvgAggregate");
const TeacherCountAggregate_1 = require("../outputs/TeacherCountAggregate");
const TeacherMaxAggregate_1 = require("../outputs/TeacherMaxAggregate");
const TeacherMinAggregate_1 = require("../outputs/TeacherMinAggregate");
const TeacherSumAggregate_1 = require("../outputs/TeacherSumAggregate");
let AggregateTeacher = class AggregateTeacher {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCountAggregate_1.TeacherCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherCountAggregate_1.TeacherCountAggregate)
], AggregateTeacher.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherAvgAggregate_1.TeacherAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherAvgAggregate_1.TeacherAvgAggregate)
], AggregateTeacher.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherSumAggregate_1.TeacherSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherSumAggregate_1.TeacherSumAggregate)
], AggregateTeacher.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherMinAggregate_1.TeacherMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherMinAggregate_1.TeacherMinAggregate)
], AggregateTeacher.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherMaxAggregate_1.TeacherMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherMaxAggregate_1.TeacherMaxAggregate)
], AggregateTeacher.prototype, "_max", void 0);
AggregateTeacher = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTeacher", {
        isAbstract: true
    })
], AggregateTeacher);
exports.AggregateTeacher = AggregateTeacher;
