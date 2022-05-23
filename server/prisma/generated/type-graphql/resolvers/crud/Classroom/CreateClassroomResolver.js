"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClassroomResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateClassroomArgs_1 = require("./args/CreateClassroomArgs");
const Classroom_1 = require("../../../models/Classroom");
const helpers_1 = require("../../../helpers");
let CreateClassroomResolver = class CreateClassroomResolver {
    async createClassroom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Classroom_1.Classroom, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateClassroomArgs_1.CreateClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateClassroomResolver.prototype, "createClassroom", null);
CreateClassroomResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Classroom_1.Classroom)
], CreateClassroomResolver);
exports.CreateClassroomResolver = CreateClassroomResolver;
