"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTeacherResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTeacherArgs_1 = require("./args/GroupByTeacherArgs");
const Teacher_1 = require("../../../models/Teacher");
const TeacherGroupBy_1 = require("../../outputs/TeacherGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTeacherResolver = class GroupByTeacherResolver {
    async groupByTeacher(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TeacherGroupBy_1.TeacherGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTeacherArgs_1.GroupByTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTeacherResolver.prototype, "groupByTeacher", null);
GroupByTeacherResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Teacher_1.Teacher)
], GroupByTeacherResolver);
exports.GroupByTeacherResolver = GroupByTeacherResolver;
