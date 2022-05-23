"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ClassroomAvgAggregate = class ClassroomAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomAvgAggregate.prototype, "teacherId", void 0);
ClassroomAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ClassroomAvgAggregate", {
        isAbstract: true
    })
], ClassroomAvgAggregate);
exports.ClassroomAvgAggregate = ClassroomAvgAggregate;
