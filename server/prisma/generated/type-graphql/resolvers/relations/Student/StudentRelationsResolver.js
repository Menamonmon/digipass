"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Classroom_1 = require("../../../models/Classroom");
const IPAddress_1 = require("../../../models/IPAddress");
const Pass_1 = require("../../../models/Pass");
const Student_1 = require("../../../models/Student");
const StudentClassroomsArgs_1 = require("./args/StudentClassroomsArgs");
const StudentIpAddressesArgs_1 = require("./args/StudentIpAddressesArgs");
const StudentPassesArgs_1 = require("./args/StudentPassesArgs");
const helpers_1 = require("../../../helpers");
let StudentRelationsResolver = class StudentRelationsResolver {
    async ipAddresses(student, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).student.findUnique({
            where: {
                id: student.id,
            },
        }).ipAddresses(args);
    }
    async classrooms(student, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).student.findUnique({
            where: {
                id: student.id,
            },
        }).classrooms(args);
    }
    async passes(student, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).student.findUnique({
            where: {
                id: student.id,
            },
        }).passes(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [IPAddress_1.IPAddress], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Student_1.Student, Object, StudentIpAddressesArgs_1.StudentIpAddressesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentRelationsResolver.prototype, "ipAddresses", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Classroom_1.Classroom], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Student_1.Student, Object, StudentClassroomsArgs_1.StudentClassroomsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentRelationsResolver.prototype, "classrooms", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Pass_1.Pass], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Student_1.Student, Object, StudentPassesArgs_1.StudentPassesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentRelationsResolver.prototype, "passes", null);
StudentRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Student_1.Student)
], StudentRelationsResolver);
exports.StudentRelationsResolver = StudentRelationsResolver;
