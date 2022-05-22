"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyClassroomResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyClassroomArgs_1 = require("./args/UpdateManyClassroomArgs");
const Classroom_1 = require("../../../models/Classroom");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyClassroomResolver = class UpdateManyClassroomResolver {
    async updateManyClassroom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyClassroomArgs_1.UpdateManyClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyClassroomResolver.prototype, "updateManyClassroom", null);
UpdateManyClassroomResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Classroom_1.Classroom)
], UpdateManyClassroomResolver);
exports.UpdateManyClassroomResolver = UpdateManyClassroomResolver;
