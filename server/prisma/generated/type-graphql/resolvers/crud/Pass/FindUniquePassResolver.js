"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePassResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniquePassArgs_1 = require("./args/FindUniquePassArgs");
const Pass_1 = require("../../../models/Pass");
const helpers_1 = require("../../../helpers");
let FindUniquePassResolver = class FindUniquePassResolver {
    async pass(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Pass_1.Pass, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePassArgs_1.FindUniquePassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniquePassResolver.prototype, "pass", null);
FindUniquePassResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pass_1.Pass)
], FindUniquePassResolver);
exports.FindUniquePassResolver = FindUniquePassResolver;
