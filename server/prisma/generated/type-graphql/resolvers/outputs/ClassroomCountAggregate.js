"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ClassroomCountAggregate = class ClassroomCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomCountAggregate.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomCountAggregate.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomCountAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomCountAggregate.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomCountAggregate.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomCountAggregate.prototype, "classCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomCountAggregate.prototype, "teacherId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomCountAggregate.prototype, "_all", void 0);
ClassroomCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ClassroomCountAggregate", {
        isAbstract: true
    })
], ClassroomCountAggregate);
exports.ClassroomCountAggregate = ClassroomCountAggregate;
