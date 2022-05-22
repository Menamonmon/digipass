"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateClassroomResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateClassroomArgs_1 = require("./args/AggregateClassroomArgs");
const Classroom_1 = require("../../../models/Classroom");
const AggregateClassroom_1 = require("../../outputs/AggregateClassroom");
const helpers_1 = require("../../../helpers");
let AggregateClassroomResolver = class AggregateClassroomResolver {
    async aggregateClassroom(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).classroom.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateClassroom_1.AggregateClassroom, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateClassroomArgs_1.AggregateClassroomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateClassroomResolver.prototype, "aggregateClassroom", null);
AggregateClassroomResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Classroom_1.Classroom)
], AggregateClassroomResolver);
exports.AggregateClassroomResolver = AggregateClassroomResolver;
