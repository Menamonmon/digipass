"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStudentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteStudentArgs_1 = require("./args/DeleteStudentArgs");
const Student_1 = require("../../../models/Student");
const helpers_1 = require("../../../helpers");
let DeleteStudentResolver = class DeleteStudentResolver {
    async deleteStudent(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Student_1.Student, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteStudentArgs_1.DeleteStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteStudentResolver.prototype, "deleteStudent", null);
DeleteStudentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Student_1.Student)
], DeleteStudentResolver);
exports.DeleteStudentResolver = DeleteStudentResolver;
