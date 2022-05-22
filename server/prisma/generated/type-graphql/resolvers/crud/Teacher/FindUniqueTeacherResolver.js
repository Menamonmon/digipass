"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTeacherResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueTeacherArgs_1 = require("./args/FindUniqueTeacherArgs");
const Teacher_1 = require("../../../models/Teacher");
const helpers_1 = require("../../../helpers");
let FindUniqueTeacherResolver = class FindUniqueTeacherResolver {
    async teacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTeacherArgs_1.FindUniqueTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTeacherResolver.prototype, "teacher", null);
FindUniqueTeacherResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Teacher_1.Teacher)
], FindUniqueTeacherResolver);
exports.FindUniqueTeacherResolver = FindUniqueTeacherResolver;
