"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomUpsertWithoutPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateWithoutPassesInput_1 = require("../inputs/ClassroomCreateWithoutPassesInput");
const ClassroomUpdateWithoutPassesInput_1 = require("../inputs/ClassroomUpdateWithoutPassesInput");
let ClassroomUpsertWithoutPassesInput = class ClassroomUpsertWithoutPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateWithoutPassesInput_1.ClassroomUpdateWithoutPassesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateWithoutPassesInput_1.ClassroomUpdateWithoutPassesInput)
], ClassroomUpsertWithoutPassesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateWithoutPassesInput_1.ClassroomCreateWithoutPassesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClassroomCreateWithoutPassesInput_1.ClassroomCreateWithoutPassesInput)
], ClassroomUpsertWithoutPassesInput.prototype, "create", void 0);
ClassroomUpsertWithoutPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomUpsertWithoutPassesInput", {
        isAbstract: true
    })
], ClassroomUpsertWithoutPassesInput);
exports.ClassroomUpsertWithoutPassesInput = ClassroomUpsertWithoutPassesInput;
