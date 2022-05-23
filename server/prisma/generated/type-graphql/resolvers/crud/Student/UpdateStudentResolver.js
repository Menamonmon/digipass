"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateStudentArgs_1 = require("./args/UpdateStudentArgs");
const Student_1 = require("../../../models/Student");
const helpers_1 = require("../../../helpers");
let UpdateStudentResolver = class UpdateStudentResolver {
    async updateStudent(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateStudentArgs_1.UpdateStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateStudentResolver.prototype, "updateStudent", null);
UpdateStudentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Student_1.Student)
], UpdateStudentResolver);
exports.UpdateStudentResolver = UpdateStudentResolver;
