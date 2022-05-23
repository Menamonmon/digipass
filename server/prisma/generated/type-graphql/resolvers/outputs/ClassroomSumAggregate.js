"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ClassroomSumAggregate = class ClassroomSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomSumAggregate.prototype, "teacherId", void 0);
ClassroomSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ClassroomSumAggregate", {
        isAbstract: true
    })
], ClassroomSumAggregate);
exports.ClassroomSumAggregate = ClassroomSumAggregate;
