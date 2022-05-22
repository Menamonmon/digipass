"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentWhereInput_1 = require("../inputs/StudentWhereInput");
let StudentRelationFilter = class StudentRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereInput_1.StudentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereInput_1.StudentWhereInput)
], StudentRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereInput_1.StudentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereInput_1.StudentWhereInput)
], StudentRelationFilter.prototype, "isNot", void 0);
StudentRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentRelationFilter", {
        isAbstract: true
    })
], StudentRelationFilter);
exports.StudentRelationFilter = StudentRelationFilter;
