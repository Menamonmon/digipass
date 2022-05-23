"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePassResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdatePassArgs_1 = require("./args/UpdatePassArgs");
const Pass_1 = require("../../../models/Pass");
const helpers_1 = require("../../../helpers");
let UpdatePassResolver = class UpdatePassResolver {
    async updatePass(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdatePassArgs_1.UpdatePassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdatePassResolver.prototype, "updatePass", null);
UpdatePassResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pass_1.Pass)
], UpdatePassResolver);
exports.UpdatePassResolver = UpdatePassResolver;
