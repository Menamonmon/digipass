"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateClassroom = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomAvgAggregate_1 = require("../outputs/ClassroomAvgAggregate");
const ClassroomCountAggregate_1 = require("../outputs/ClassroomCountAggregate");
const ClassroomMaxAggregate_1 = require("../outputs/ClassroomMaxAggregate");
const ClassroomMinAggregate_1 = require("../outputs/ClassroomMinAggregate");
const ClassroomSumAggregate_1 = require("../outputs/ClassroomSumAggregate");
let AggregateClassroom = class AggregateClassroom {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCountAggregate_1.ClassroomCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomCountAggregate_1.ClassroomCountAggregate)
], AggregateClassroom.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomAvgAggregate_1.ClassroomAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomAvgAggregate_1.ClassroomAvgAggregate)
], AggregateClassroom.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomSumAggregate_1.ClassroomSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomSumAggregate_1.ClassroomSumAggregate)
], AggregateClassroom.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomMinAggregate_1.ClassroomMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomMinAggregate_1.ClassroomMinAggregate)
], AggregateClassroom.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomMaxAggregate_1.ClassroomMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomMaxAggregate_1.ClassroomMaxAggregate)
], AggregateClassroom.prototype, "_max", void 0);
AggregateClassroom = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateClassroom", {
        isAbstract: true
    })
], AggregateClassroom);
exports.AggregateClassroom = AggregateClassroom;
