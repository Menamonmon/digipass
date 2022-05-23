"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateStudentArgs_1 = require("./args/CreateStudentArgs");
const Student_1 = require("../../../models/Student");
const helpers_1 = require("../../../helpers");
let CreateStudentResolver = class CreateStudentResolver {
    async createStudent(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Student_1.Student, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateStudentArgs_1.CreateStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateStudentResolver.prototype, "createStudent", null);
CreateStudentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Student_1.Student)
], CreateStudentResolver);
exports.CreateStudentResolver = CreateStudentResolver;
