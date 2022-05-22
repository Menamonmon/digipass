"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomUpdateManyWithoutStudentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClassroomCreateOrConnectWithoutStudentsInput_1 = require("../inputs/ClassroomCreateOrConnectWithoutStudentsInput");
const ClassroomCreateWithoutStudentsInput_1 = require("../inputs/ClassroomCreateWithoutStudentsInput");
const ClassroomScalarWhereInput_1 = require("../inputs/ClassroomScalarWhereInput");
const ClassroomUpdateManyWithWhereWithoutStudentsInput_1 = require("../inputs/ClassroomUpdateManyWithWhereWithoutStudentsInput");
const ClassroomUpdateWithWhereUniqueWithoutStudentsInput_1 = require("../inputs/ClassroomUpdateWithWhereUniqueWithoutStudentsInput");
const ClassroomUpsertWithWhereUniqueWithoutStudentsInput_1 = require("../inputs/ClassroomUpsertWithWhereUniqueWithoutStudentsInput");
const ClassroomWhereUniqueInput_1 = require("../inputs/ClassroomWhereUniqueInput");
let ClassroomUpdateManyWithoutStudentsInput = class ClassroomUpdateManyWithoutStudentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomCreateWithoutStudentsInput_1.ClassroomCreateWithoutStudentsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutStudentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomCreateOrConnectWithoutStudentsInput_1.ClassroomCreateOrConnectWithoutStudentsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutStudentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomUpsertWithWhereUniqueWithoutStudentsInput_1.ClassroomUpsertWithWhereUniqueWithoutStudentsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutStudentsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutStudentsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutStudentsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutStudentsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomWhereUniqueInput_1.ClassroomWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutStudentsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomUpdateWithWhereUniqueWithoutStudentsInput_1.ClassroomUpdateWithWhereUniqueWithoutStudentsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutStudentsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomUpdateManyWithWhereWithoutStudentsInput_1.ClassroomUpdateManyWithWhereWithoutStudentsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutStudentsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClassroomScalarWhereInput_1.ClassroomScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClassroomUpdateManyWithoutStudentsInput.prototype, "deleteMany", void 0);
ClassroomUpdateManyWithoutStudentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClassroomUpdateManyWithoutStudentsInput", {
        isAbstract: true
    })
], ClassroomUpdateManyWithoutStudentsInput);
exports.ClassroomUpdateManyWithoutStudentsInput = ClassroomUpdateManyWithoutStudentsInput;
