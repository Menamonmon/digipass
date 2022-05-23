"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTeacherResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyTeacherArgs_1 = require("./args/FindManyTeacherArgs");
const Teacher_1 = require("../../../models/Teacher");
const helpers_1 = require("../../../helpers");
let FindManyTeacherResolver = class FindManyTeacherResolver {
    async teachers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Teacher_1.Teacher], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTeacherArgs_1.FindManyTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyTeacherResolver.prototype, "teachers", null);
FindManyTeacherResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Teacher_1.Teacher)
], FindManyTeacherResolver);
exports.FindManyTeacherResolver = FindManyTeacherResolver;
