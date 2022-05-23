"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ClassroomMinAggregate = class ClassroomMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomMinAggregate.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomMinAggregate.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomMinAggregate.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomMinAggregate.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomMinAggregate.prototype, "classCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomMinAggregate.prototype, "teacherId", void 0);
ClassroomMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ClassroomMinAggregate", {
        isAbstract: true
    })
], ClassroomMinAggregate);
exports.ClassroomMinAggregate = ClassroomMinAggregate;
