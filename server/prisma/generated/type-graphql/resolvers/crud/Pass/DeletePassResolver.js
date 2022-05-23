"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePassResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeletePassArgs_1 = require("./args/DeletePassArgs");
const Pass_1 = require("../../../models/Pass");
const helpers_1 = require("../../../helpers");
let DeletePassResolver = class DeletePassResolver {
    async deletePass(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pass_1.Pass, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeletePassArgs_1.DeletePassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeletePassResolver.prototype, "deletePass", null);
DeletePassResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pass_1.Pass)
], DeletePassResolver);
exports.DeletePassResolver = DeletePassResolver;
