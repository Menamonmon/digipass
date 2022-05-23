"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeacherAvgAggregate = class TeacherAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TeacherAvgAggregate.prototype, "id", void 0);
TeacherAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeacherAvgAggregate", {
        isAbstract: true
    })
], TeacherAvgAggregate);
exports.TeacherAvgAggregate = TeacherAvgAggregate;
