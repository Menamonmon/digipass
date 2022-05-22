"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomWhereInput_1 = require("../inputs/ClassroomWhereInput");
let ClassroomListRelationFilter = class ClassroomListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereInput_1.ClassroomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomWhereInput_1.ClassroomWhereInput)
], ClassroomListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereInput_1.ClassroomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomWhereInput_1.ClassroomWhereInput)
], ClassroomListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereInput_1.ClassroomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomWhereInput_1.ClassroomWhereInput)
], ClassroomListRelationFilter.prototype, "none", void 0);
ClassroomListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomListRelationFilter", {
        isAbstract: true
    })
], ClassroomListRelationFilter);
exports.ClassroomListRelationFilter = ClassroomListRelationFilter;
