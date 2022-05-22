"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeacherCount = class TeacherCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TeacherCount.prototype, "classrooms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TeacherCount.prototype, "issuedPasses", void 0);
TeacherCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeacherCount", {
        isAbstract: true
    })
], TeacherCount);
exports.TeacherCount = TeacherCount;
