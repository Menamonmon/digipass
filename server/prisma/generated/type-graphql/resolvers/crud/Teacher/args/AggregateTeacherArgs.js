"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTeacherArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherOrderByWithRelationInput_1 = require("../../../inputs/TeacherOrderByWithRelationInput");
const TeacherWhereInput_1 = require("../../../inputs/TeacherWhereInput");
const TeacherWhereUniqueInput_1 = require("../../../inputs/TeacherWhereUniqueInput");
let AggregateTeacherArgs = class AggregateTeacherArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereInput_1.TeacherWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherWhereInput_1.TeacherWhereInput)
], AggregateTeacherArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeacherOrderByWithRelationInput_1.TeacherOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTeacherArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereUniqueInput_1.TeacherWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherWhereUniqueInput_1.TeacherWhereUniqueInput)
], AggregateTeacherArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTeacherArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTeacherArgs.prototype, "skip", void 0);
AggregateTeacherArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTeacherArgs);
exports.AggregateTeacherArgs = AggregateTeacherArgs;
