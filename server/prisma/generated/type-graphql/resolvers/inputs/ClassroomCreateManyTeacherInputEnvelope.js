"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomCreateManyTeacherInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateManyTeacherInput_1 = require("../inputs/ClassroomCreateManyTeacherInput");
let ClassroomCreateManyTeacherInputEnvelope = class ClassroomCreateManyTeacherInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomCreateManyTeacherInput_1.ClassroomCreateManyTeacherInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomCreateManyTeacherInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ClassroomCreateManyTeacherInputEnvelope.prototype, "skipDuplicates", void 0);
ClassroomCreateManyTeacherInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomCreateManyTeacherInputEnvelope", {
        isAbstract: true
    })
], ClassroomCreateManyTeacherInputEnvelope);
exports.ClassroomCreateManyTeacherInputEnvelope = ClassroomCreateManyTeacherInputEnvelope;
