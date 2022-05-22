"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClassroomResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteClassroomArgs_1 = require("./args/DeleteClassroomArgs");
const Classroom_1 = require("../../../models/Classroom");
const helpers_1 = require("../../../helpers");
let DeleteClassroomResolver = class DeleteClassroomResolver {
    async deleteClassroom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Classroom_1.Classroom, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteClassroomArgs_1.DeleteClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteClassroomResolver.prototype, "deleteClassroom", null);
DeleteClassroomResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Classroom_1.Classroom)
], DeleteClassroomResolver);
exports.DeleteClassroomResolver = DeleteClassroomResolver;
