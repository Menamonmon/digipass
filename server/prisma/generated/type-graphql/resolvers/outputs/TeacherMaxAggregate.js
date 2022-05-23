"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeacherMaxAggregate = class TeacherMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TeacherMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherMaxAggregate.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherMaxAggregate.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherMaxAggregate.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherMaxAggregate.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeacherMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeacherMaxAggregate.prototype, "lastLogin", void 0);
TeacherMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeacherMaxAggregate", {
        isAbstract: true
    })
], TeacherMaxAggregate);
exports.TeacherMaxAggregate = TeacherMaxAggregate;
