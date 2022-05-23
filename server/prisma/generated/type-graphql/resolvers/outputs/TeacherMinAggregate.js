"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeacherMinAggregate = class TeacherMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TeacherMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherMinAggregate.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherMinAggregate.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherMinAggregate.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeacherMinAggregate.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeacherMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeacherMinAggregate.prototype, "lastLogin", void 0);
TeacherMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeacherMinAggregate", {
        isAbstract: true
    })
], TeacherMinAggregate);
exports.TeacherMinAggregate = TeacherMinAggregate;
