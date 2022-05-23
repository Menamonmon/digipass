"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherUpsertWithoutIssuedPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherCreateWithoutIssuedPassesInput_1 = require("../inputs/TeacherCreateWithoutIssuedPassesInput");
const TeacherUpdateWithoutIssuedPassesInput_1 = require("../inputs/TeacherUpdateWithoutIssuedPassesInput");
let TeacherUpsertWithoutIssuedPassesInput = class TeacherUpsertWithoutIssuedPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateWithoutIssuedPassesInput_1.TeacherUpdateWithoutIssuedPassesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherUpdateWithoutIssuedPassesInput_1.TeacherUpdateWithoutIssuedPassesInput)
], TeacherUpsertWithoutIssuedPassesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateWithoutIssuedPassesInput_1.TeacherCreateWithoutIssuedPassesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeacherCreateWithoutIssuedPassesInput_1.TeacherCreateWithoutIssuedPassesInput)
], TeacherUpsertWithoutIssuedPassesInput.prototype, "create", void 0);
TeacherUpsertWithoutIssuedPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherUpsertWithoutIssuedPassesInput", {
        isAbstract: true
    })
], TeacherUpsertWithoutIssuedPassesInput);
exports.TeacherUpsertWithoutIssuedPassesInput = TeacherUpsertWithoutIssuedPassesInput;
