"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassCreateManyIssuerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PassCreateManyIssuerInput = class PassCreateManyIssuerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PassCreateManyIssuerInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PassCreateManyIssuerInput.prototype, "studentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PassCreateManyIssuerInput.prototype, "classId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PassCreateManyIssuerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PassCreateManyIssuerInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PassCreateManyIssuerInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PassCreateManyIssuerInput.prototype, "duration", void 0);
PassCreateManyIssuerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassCreateManyIssuerInput", {
        isAbstract: true
    })
], PassCreateManyIssuerInput);
exports.PassCreateManyIssuerInput = PassCreateManyIssuerInput;
