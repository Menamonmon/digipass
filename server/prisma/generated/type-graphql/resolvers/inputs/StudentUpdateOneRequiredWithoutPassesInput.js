"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentUpdateOneRequiredWithoutPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateOrConnectWithoutPassesInput_1 = require("../inputs/StudentCreateOrConnectWithoutPassesInput");
const StudentCreateWithoutPassesInput_1 = require("../inputs/StudentCreateWithoutPassesInput");
const StudentUpdateWithoutPassesInput_1 = require("../inputs/StudentUpdateWithoutPassesInput");
const StudentUpsertWithoutPassesInput_1 = require("../inputs/StudentUpsertWithoutPassesInput");
const StudentWhereUniqueInput_1 = require("../inputs/StudentWhereUniqueInput");
let StudentUpdateOneRequiredWithoutPassesInput = class StudentUpdateOneRequiredWithoutPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateWithoutPassesInput_1.StudentCreateWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentCreateWithoutPassesInput_1.StudentCreateWithoutPassesInput)
], StudentUpdateOneRequiredWithoutPassesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateOrConnectWithoutPassesInput_1.StudentCreateOrConnectWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentCreateOrConnectWithoutPassesInput_1.StudentCreateOrConnectWithoutPassesInput)
], StudentUpdateOneRequiredWithoutPassesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpsertWithoutPassesInput_1.StudentUpsertWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentUpsertWithoutPassesInput_1.StudentUpsertWithoutPassesInput)
], StudentUpdateOneRequiredWithoutPassesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentWhereUniqueInput_1.StudentWhereUniqueInput)
], StudentUpdateOneRequiredWithoutPassesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentUpdateWithoutPassesInput_1.StudentUpdateWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StudentUpdateWithoutPassesInput_1.StudentUpdateWithoutPassesInput)
], StudentUpdateOneRequiredWithoutPassesInput.prototype, "update", void 0);
StudentUpdateOneRequiredWithoutPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentUpdateOneRequiredWithoutPassesInput", {
        isAbstract: true
    })
], StudentUpdateOneRequiredWithoutPassesInput);
exports.StudentUpdateOneRequiredWithoutPassesInput = StudentUpdateOneRequiredWithoutPassesInput;
