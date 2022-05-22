"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueStudentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueStudentArgs_1 = require("./args/FindUniqueStudentArgs");
const Student_1 = require("../../../models/Student");
const helpers_1 = require("../../../helpers");
let FindUniqueStudentResolver = class FindUniqueStudentResolver {
    async student(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Student_1.Student, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStudentArgs_1.FindUniqueStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueStudentResolver.prototype, "student", null);
FindUniqueStudentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Student_1.Student)
], FindUniqueStudentResolver);
exports.FindUniqueStudentResolver = FindUniqueStudentResolver;
