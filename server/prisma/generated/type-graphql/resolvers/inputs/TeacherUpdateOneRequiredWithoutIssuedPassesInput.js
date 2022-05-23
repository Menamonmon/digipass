"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherUpdateOneRequiredWithoutIssuedPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeacherCreateOrConnectWithoutIssuedPassesInput_1 = require("../inputs/TeacherCreateOrConnectWithoutIssuedPassesInput");
const TeacherCreateWithoutIssuedPassesInput_1 = require("../inputs/TeacherCreateWithoutIssuedPassesInput");
const TeacherUpdateWithoutIssuedPassesInput_1 = require("../inputs/TeacherUpdateWithoutIssuedPassesInput");
const TeacherUpsertWithoutIssuedPassesInput_1 = require("../inputs/TeacherUpsertWithoutIssuedPassesInput");
const TeacherWhereUniqueInput_1 = require("../inputs/TeacherWhereUniqueInput");
let TeacherUpdateOneRequiredWithoutIssuedPassesInput = class TeacherUpdateOneRequiredWithoutIssuedPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateWithoutIssuedPassesInput_1.TeacherCreateWithoutIssuedPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherCreateWithoutIssuedPassesInput_1.TeacherCreateWithoutIssuedPassesInput)
], TeacherUpdateOneRequiredWithoutIssuedPassesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherCreateOrConnectWithoutIssuedPassesInput_1.TeacherCreateOrConnectWithoutIssuedPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherCreateOrConnectWithoutIssuedPassesInput_1.TeacherCreateOrConnectWithoutIssuedPassesInput)
], TeacherUpdateOneRequiredWithoutIssuedPassesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpsertWithoutIssuedPassesInput_1.TeacherUpsertWithoutIssuedPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherUpsertWithoutIssuedPassesInput_1.TeacherUpsertWithoutIssuedPassesInput)
], TeacherUpdateOneRequiredWithoutIssuedPassesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherWhereUniqueInput_1.TeacherWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherWhereUniqueInput_1.TeacherWhereUniqueInput)
], TeacherUpdateOneRequiredWithoutIssuedPassesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeacherUpdateWithoutIssuedPassesInput_1.TeacherUpdateWithoutIssuedPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeacherUpdateWithoutIssuedPassesInput_1.TeacherUpdateWithoutIssuedPassesInput)
], TeacherUpdateOneRequiredWithoutIssuedPassesInput.prototype, "update", void 0);
TeacherUpdateOneRequiredWithoutIssuedPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeacherUpdateOneRequiredWithoutIssuedPassesInput", {
        isAbstract: true
    })
], TeacherUpdateOneRequiredWithoutIssuedPassesInput);
exports.TeacherUpdateOneRequiredWithoutIssuedPassesInput = TeacherUpdateOneRequiredWithoutIssuedPassesInput;
