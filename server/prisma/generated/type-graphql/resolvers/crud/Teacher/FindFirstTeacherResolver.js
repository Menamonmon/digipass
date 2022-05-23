"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTeacherResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstTeacherArgs_1 = require("./args/FindFirstTeacherArgs");
const Teacher_1 = require("../../../models/Teacher");
const helpers_1 = require("../../../helpers");
let FindFirstTeacherResolver = class FindFirstTeacherResolver {
    async findFirstTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Teacher_1.Teacher, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTeacherArgs_1.FindFirstTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTeacherResolver.prototype, "findFirstTeacher", null);
FindFirstTeacherResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Teacher_1.Teacher)
], FindFirstTeacherResolver);
exports.FindFirstTeacherResolver = FindFirstTeacherResolver;
