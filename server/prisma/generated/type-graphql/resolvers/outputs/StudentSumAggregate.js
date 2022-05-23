"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StudentSumAggregate = class StudentSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StudentSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StudentSumAggregate.prototype, "passesUsed", void 0);
StudentSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StudentSumAggregate", {
        isAbstract: true
    })
], StudentSumAggregate);
exports.StudentSumAggregate = StudentSumAggregate;
