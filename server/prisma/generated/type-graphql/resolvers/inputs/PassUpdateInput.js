"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomUpdateOneWithoutPassesInput_1 = require("../inputs/ClassroomUpdateOneWithoutPassesInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const StudentUpdateOneWithoutPassesInput_1 = require("../inputs/StudentUpdateOneWithoutPassesInput");
const TeacherUpdateOneWithoutIssuedPassesInput_1 = require("../inputs/TeacherUpdateOneWithoutIssuedPassesInput");
let PassUpdateInput = class PassUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateOneWithoutPassesInput_1.StudentUpdateOneWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentUpdateOneWithoutPassesInput_1.StudentUpdateOneWithoutPassesInput)
], PassUpdateInput.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateOneWithoutPassesInput_1.ClassroomUpdateOneWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateOneWithoutPassesInput_1.ClassroomUpdateOneWithoutPassesInput)
], PassUpdateInput.prototype, "classroom", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], PassUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], PassUpdateInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], PassUpdateInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], PassUpdateInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateOneWithoutIssuedPassesInput_1.TeacherUpdateOneWithoutIssuedPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherUpdateOneWithoutIssuedPassesInput_1.TeacherUpdateOneWithoutIssuedPassesInput)
], PassUpdateInput.prototype, "issuer", void 0);
PassUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateInput", {
        isAbstract: true
    })
], PassUpdateInput);
exports.PassUpdateInput = PassUpdateInput;
