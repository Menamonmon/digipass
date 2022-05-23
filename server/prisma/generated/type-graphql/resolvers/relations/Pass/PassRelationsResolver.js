"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Classroom_1 = require("../../../models/Classroom");
const Pass_1 = require("../../../models/Pass");
const Student_1 = require("../../../models/Student");
const Teacher_1 = require("../../../models/Teacher");
const helpers_1 = require("../../../helpers");
let PassRelationsResolver = class PassRelationsResolver {
    async student(pass, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.findUnique({
            where: {
                id: pass.id,
            },
        }).student({});
    }
    async classroom(pass, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.findUnique({
            where: {
                id: pass.id,
            },
        }).classroom({});
    }
    async issuer(pass, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.findUnique({
            where: {
                id: pass.id,
            },
        }).issuer({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Student_1.Student, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Pass_1.Pass, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PassRelationsResolver.prototype, "student", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Classroom_1.Classroom, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Pass_1.Pass, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PassRelationsResolver.prototype, "classroom", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Teacher_1.Teacher, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Pass_1.Pass, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PassRelationsResolver.prototype, "issuer", null);
PassRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pass_1.Pass)
], PassRelationsResolver);
exports.PassRelationsResolver = PassRelationsResolver;
