"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherWhereInput_1 = require("../inputs/TeacherWhereInput");
let TeacherRelationFilter = class TeacherRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereInput_1.TeacherWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherWhereInput_1.TeacherWhereInput)
], TeacherRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereInput_1.TeacherWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherWhereInput_1.TeacherWhereInput)
], TeacherRelationFilter.prototype, "isNot", void 0);
TeacherRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherRelationFilter", {
        isAbstract: true
    })
], TeacherRelationFilter);
exports.TeacherRelationFilter = TeacherRelationFilter;
