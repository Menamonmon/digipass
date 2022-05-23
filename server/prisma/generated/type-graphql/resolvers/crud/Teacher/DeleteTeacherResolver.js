"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTeacherResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteTeacherArgs_1 = require("./args/DeleteTeacherArgs");
const Teacher_1 = require("../../../models/Teacher");
const helpers_1 = require("../../../helpers");
let DeleteTeacherResolver = class DeleteTeacherResolver {
    async deleteTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Teacher_1.Teacher, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTeacherArgs_1.DeleteTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteTeacherResolver.prototype, "deleteTeacher", null);
DeleteTeacherResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Teacher_1.Teacher)
], DeleteTeacherResolver);
exports.DeleteTeacherResolver = DeleteTeacherResolver;
