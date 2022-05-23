"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByClassroomResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByClassroomArgs_1 = require("./args/GroupByClassroomArgs");
const Classroom_1 = require("../../../models/Classroom");
const ClassroomGroupBy_1 = require("../../outputs/ClassroomGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByClassroomResolver = class GroupByClassroomResolver {
    async groupByClassroom(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ClassroomGroupBy_1.ClassroomGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByClassroomArgs_1.GroupByClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByClassroomResolver.prototype, "groupByClassroom", null);
GroupByClassroomResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Classroom_1.Classroom)
], GroupByClassroomResolver);
exports.GroupByClassroomResolver = GroupByClassroomResolver;
