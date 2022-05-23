"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyStudentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyStudentArgs_1 = require("./args/DeleteManyStudentArgs");
const Student_1 = require("../../../models/Student");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyStudentResolver = class DeleteManyStudentResolver {
    async deleteManyStudent(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyStudentArgs_1.DeleteManyStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyStudentResolver.prototype, "deleteManyStudent", null);
DeleteManyStudentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Student_1.Student)
], DeleteManyStudentResolver);
exports.DeleteManyStudentResolver = DeleteManyStudentResolver;
