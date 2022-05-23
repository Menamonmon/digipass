"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StudentAvgAggregate = class StudentAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StudentAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StudentAvgAggregate.prototype, "passesUsed", void 0);
StudentAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StudentAvgAggregate", {
        isAbstract: true
    })
], StudentAvgAggregate);
exports.StudentAvgAggregate = StudentAvgAggregate;
