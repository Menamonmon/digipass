"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStudentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentOrderByWithRelationInput_1 = require("../../../inputs/StudentOrderByWithRelationInput");
const StudentWhereInput_1 = require("../../../inputs/StudentWhereInput");
const StudentWhereUniqueInput_1 = require("../../../inputs/StudentWhereUniqueInput");
let AggregateStudentArgs = class AggregateStudentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereInput_1.StudentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereInput_1.StudentWhereInput)
], AggregateStudentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StudentOrderByWithRelationInput_1.StudentOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateStudentArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereUniqueInput_1.StudentWhereUniqueInput)
], AggregateStudentArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateStudentArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateStudentArgs.prototype, "skip", void 0);
AggregateStudentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateStudentArgs);
exports.AggregateStudentArgs = AggregateStudentArgs;
