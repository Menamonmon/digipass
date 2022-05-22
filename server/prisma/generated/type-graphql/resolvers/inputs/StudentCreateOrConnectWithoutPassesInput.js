"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCreateOrConnectWithoutPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StudentCreateWithoutPassesInput_1 = require("../inputs/StudentCreateWithoutPassesInput");
const StudentWhereUniqueInput_1 = require("../inputs/StudentWhereUniqueInput");
let StudentCreateOrConnectWithoutPassesInput = class StudentCreateOrConnectWithoutPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentWhereUniqueInput_1.StudentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentWhereUniqueInput_1.StudentWhereUniqueInput)
], StudentCreateOrConnectWithoutPassesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StudentCreateWithoutPassesInput_1.StudentCreateWithoutPassesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StudentCreateWithoutPassesInput_1.StudentCreateWithoutPassesInput)
], StudentCreateOrConnectWithoutPassesInput.prototype, "create", void 0);
StudentCreateOrConnectWithoutPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StudentCreateOrConnectWithoutPassesInput", {
        isAbstract: true
    })
], StudentCreateOrConnectWithoutPassesInput);
exports.StudentCreateOrConnectWithoutPassesInput = StudentCreateOrConnectWithoutPassesInput;
