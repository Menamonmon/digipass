"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomAvgAggregate_1 = require("../outputs/ClassroomAvgAggregate");
const ClassroomCountAggregate_1 = require("../outputs/ClassroomCountAggregate");
const ClassroomMaxAggregate_1 = require("../outputs/ClassroomMaxAggregate");
const ClassroomMinAggregate_1 = require("../outputs/ClassroomMinAggregate");
const ClassroomSumAggregate_1 = require("../outputs/ClassroomSumAggregate");
let ClassroomGroupBy = class ClassroomGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomGroupBy.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomGroupBy.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomGroupBy.prototype, "classCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomGroupBy.prototype, "teacherId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCountAggregate_1.ClassroomCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomCountAggregate_1.ClassroomCountAggregate)
], ClassroomGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomAvgAggregate_1.ClassroomAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomAvgAggregate_1.ClassroomAvgAggregate)
], ClassroomGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomSumAggregate_1.ClassroomSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomSumAggregate_1.ClassroomSumAggregate)
], ClassroomGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomMinAggregate_1.ClassroomMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomMinAggregate_1.ClassroomMinAggregate)
], ClassroomGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomMaxAggregate_1.ClassroomMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomMaxAggregate_1.ClassroomMaxAggregate)
], ClassroomGroupBy.prototype, "_max", void 0);
ClassroomGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ClassroomGroupBy", {
        isAbstract: true
    })
], ClassroomGroupBy);
exports.ClassroomGroupBy = ClassroomGroupBy;
