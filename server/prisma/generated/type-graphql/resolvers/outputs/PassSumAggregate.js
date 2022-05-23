"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PassSumAggregate = class PassSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PassSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PassSumAggregate.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PassSumAggregate.prototype, "classId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PassSumAggregate.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PassSumAggregate.prototype, "issuerId", void 0);
PassSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PassSumAggregate", {
        isAbstract: true
    })
], PassSumAggregate);
exports.PassSumAggregate = PassSumAggregate;
