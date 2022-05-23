"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ClassroomCount = class ClassroomCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomCount.prototype, "students", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomCount.prototype, "passes", void 0);
ClassroomCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ClassroomCount", {
        isAbstract: true
    })
], ClassroomCount);
exports.ClassroomCount = ClassroomCount;
