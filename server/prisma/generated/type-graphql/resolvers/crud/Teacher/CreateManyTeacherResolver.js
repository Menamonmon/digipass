"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTeacherResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyTeacherArgs_1 = require("./args/CreateManyTeacherArgs");
const Teacher_1 = require("../../../models/Teacher");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyTeacherResolver = class CreateManyTeacherResolver {
    async createManyTeacher(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTeacherArgs_1.CreateManyTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyTeacherResolver.prototype, "createManyTeacher", null);
CreateManyTeacherResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Teacher_1.Teacher)
], CreateManyTeacherResolver);
exports.CreateManyTeacherResolver = CreateManyTeacherResolver;
