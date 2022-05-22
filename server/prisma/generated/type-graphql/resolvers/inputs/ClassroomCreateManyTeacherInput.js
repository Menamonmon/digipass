"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomCreateManyTeacherInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ClassroomCreateManyTeacherInput = class ClassroomCreateManyTeacherInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ClassroomCreateManyTeacherInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomCreateManyTeacherInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomCreateManyTeacherInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomCreateManyTeacherInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomCreateManyTeacherInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ClassroomCreateManyTeacherInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClassroomCreateManyTeacherInput.prototype, "classCode", void 0);
ClassroomCreateManyTeacherInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomCreateManyTeacherInput", {
        isAbstract: true
    })
], ClassroomCreateManyTeacherInput);
exports.ClassroomCreateManyTeacherInput = ClassroomCreateManyTeacherInput;
