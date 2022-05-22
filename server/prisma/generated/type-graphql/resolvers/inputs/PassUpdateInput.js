"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomUpdateOneRequiredWithoutPassesInput_1 = require("../inputs/ClassroomUpdateOneRequiredWithoutPassesInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StudentUpdateOneRequiredWithoutPassesInput_1 = require("../inputs/StudentUpdateOneRequiredWithoutPassesInput");
const TeacherUpdateOneRequiredWithoutIssuedPassesInput_1 = require("../inputs/TeacherUpdateOneRequiredWithoutIssuedPassesInput");
let PassUpdateInput = class PassUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateOneRequiredWithoutPassesInput_1.StudentUpdateOneRequiredWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentUpdateOneRequiredWithoutPassesInput_1.StudentUpdateOneRequiredWithoutPassesInput)
], PassUpdateInput.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateOneRequiredWithoutPassesInput_1.ClassroomUpdateOneRequiredWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateOneRequiredWithoutPassesInput_1.ClassroomUpdateOneRequiredWithoutPassesInput)
], PassUpdateInput.prototype, "classroom", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PassUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PassUpdateInput.prototype, "startTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PassUpdateInput.prototype, "endTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PassUpdateInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateOneRequiredWithoutIssuedPassesInput_1.TeacherUpdateOneRequiredWithoutIssuedPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherUpdateOneRequiredWithoutIssuedPassesInput_1.TeacherUpdateOneRequiredWithoutIssuedPassesInput)
], PassUpdateInput.prototype, "issuer", void 0);
PassUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PassUpdateInput", {
        isAbstract: true
    })
], PassUpdateInput);
exports.PassUpdateInput = PassUpdateInput;
