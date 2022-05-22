"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomUpdateOneRequiredWithoutPassesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateOrConnectWithoutPassesInput_1 = require("../inputs/ClassroomCreateOrConnectWithoutPassesInput");
const ClassroomCreateWithoutPassesInput_1 = require("../inputs/ClassroomCreateWithoutPassesInput");
const ClassroomUpdateWithoutPassesInput_1 = require("../inputs/ClassroomUpdateWithoutPassesInput");
const ClassroomUpsertWithoutPassesInput_1 = require("../inputs/ClassroomUpsertWithoutPassesInput");
const ClassroomWhereUniqueInput_1 = require("../inputs/ClassroomWhereUniqueInput");
let ClassroomUpdateOneRequiredWithoutPassesInput = class ClassroomUpdateOneRequiredWithoutPassesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateWithoutPassesInput_1.ClassroomCreateWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomCreateWithoutPassesInput_1.ClassroomCreateWithoutPassesInput)
], ClassroomUpdateOneRequiredWithoutPassesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomCreateOrConnectWithoutPassesInput_1.ClassroomCreateOrConnectWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomCreateOrConnectWithoutPassesInput_1.ClassroomCreateOrConnectWithoutPassesInput)
], ClassroomUpdateOneRequiredWithoutPassesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpsertWithoutPassesInput_1.ClassroomUpsertWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomUpsertWithoutPassesInput_1.ClassroomUpsertWithoutPassesInput)
], ClassroomUpdateOneRequiredWithoutPassesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput)
], ClassroomUpdateOneRequiredWithoutPassesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClassroomUpdateWithoutPassesInput_1.ClassroomUpdateWithoutPassesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClassroomUpdateWithoutPassesInput_1.ClassroomUpdateWithoutPassesInput)
], ClassroomUpdateOneRequiredWithoutPassesInput.prototype, "update", void 0);
ClassroomUpdateOneRequiredWithoutPassesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomUpdateOneRequiredWithoutPassesInput", {
        isAbstract: true
    })
], ClassroomUpdateOneRequiredWithoutPassesInput);
exports.ClassroomUpdateOneRequiredWithoutPassesInput = ClassroomUpdateOneRequiredWithoutPassesInput;
