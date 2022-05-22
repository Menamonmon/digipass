"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentUpsertWithoutPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateWithoutPassesInput_1 = require("../inputs/StudentCreateWithoutPassesInput");
const StudentUpdateWithoutPassesInput_1 = require("../inputs/StudentUpdateWithoutPassesInput");
let StudentUpsertWithoutPassesInput = class StudentUpsertWithoutPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateWithoutPassesInput_1.StudentUpdateWithoutPassesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentUpdateWithoutPassesInput_1.StudentUpdateWithoutPassesInput)
], StudentUpsertWithoutPassesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateWithoutPassesInput_1.StudentCreateWithoutPassesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentCreateWithoutPassesInput_1.StudentCreateWithoutPassesInput)
], StudentUpsertWithoutPassesInput.prototype, "create", void 0);
StudentUpsertWithoutPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentUpsertWithoutPassesInput", {
        isAbstract: true
    })
], StudentUpsertWithoutPassesInput);
exports.StudentUpsertWithoutPassesInput = StudentUpsertWithoutPassesInput;
