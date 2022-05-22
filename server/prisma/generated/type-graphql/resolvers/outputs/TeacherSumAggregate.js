"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeacherSumAggregate = class TeacherSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TeacherSumAggregate.prototype, "id", void 0);
TeacherSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeacherSumAggregate", {
        isAbstract: true
    })
], TeacherSumAggregate);
exports.TeacherSumAggregate = TeacherSumAggregate;
