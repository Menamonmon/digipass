"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstClassroomResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstClassroomArgs_1 = require("./args/FindFirstClassroomArgs");
const Classroom_1 = require("../../../models/Classroom");
const helpers_1 = require("../../../helpers");
let FindFirstClassroomResolver = class FindFirstClassroomResolver {
    async findFirstClassroom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Classroom_1.Classroom, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstClassroomArgs_1.FindFirstClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstClassroomResolver.prototype, "findFirstClassroom", null);
FindFirstClassroomResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Classroom_1.Classroom)
], FindFirstClassroomResolver);
exports.FindFirstClassroomResolver = FindFirstClassroomResolver;
