"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateWithoutStudentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomUpdateOneRequiredWithoutPassesInput_1 = require("../inputs/ClassroomUpdateOneRequiredWithoutPassesInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const TeacherUpdateOneRequiredWithoutIssuedPassesInput_1 = require("../inputs/TeacherUpdateOneRequiredWithoutIssuedPassesInput");
let PassUpdateWithoutStudentInput = class PassUpdateWithoutStudentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateOneRequiredWithoutPassesInput_1.ClassroomUpdateOneRequiredWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateOneRequiredWithoutPassesInput_1.ClassroomUpdateOneRequiredWithoutPassesInput)
], PassUpdateWithoutStudentInput.prototype, "classroom", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutStudentInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutStudentInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PassUpdateWithoutStudentInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PassUpdateWithoutStudentInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateOneRequiredWithoutIssuedPassesInput_1.TeacherUpdateOneRequiredWithoutIssuedPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherUpdateOneRequiredWithoutIssuedPassesInput_1.TeacherUpdateOneRequiredWithoutIssuedPassesInput)
], PassUpdateWithoutStudentInput.prototype, "issuer", void 0);
PassUpdateWithoutStudentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateWithoutStudentInput", {
        isAbstract: true
    })
], PassUpdateWithoutStudentInput);
exports.PassUpdateWithoutStudentInput = PassUpdateWithoutStudentInput;
