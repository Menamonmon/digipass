"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StudentCount = class StudentCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], StudentCount.prototype, "ipAddresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], StudentCount.prototype, "classrooms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], StudentCount.prototype, "passes", void 0);
StudentCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StudentCount", {
        isAbstract: true
    })
], StudentCount);
exports.StudentCount = StudentCount;
