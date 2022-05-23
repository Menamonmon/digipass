"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentWhereInput_1 = require("../inputs/StudentWhereInput");
let StudentListRelationFilter = class StudentListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereInput_1.StudentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereInput_1.StudentWhereInput)
], StudentListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereInput_1.StudentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereInput_1.StudentWhereInput)
], StudentListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereInput_1.StudentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereInput_1.StudentWhereInput)
], StudentListRelationFilter.prototype, "none", void 0);
StudentListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentListRelationFilter", {
        isAbstract: true
    })
], StudentListRelationFilter);
exports.StudentListRelationFilter = StudentListRelationFilter;
