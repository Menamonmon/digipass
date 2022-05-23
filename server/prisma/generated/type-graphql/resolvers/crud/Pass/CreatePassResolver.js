"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePassResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreatePassArgs_1 = require("./args/CreatePassArgs");
const Pass_1 = require("../../../models/Pass");
const helpers_1 = require("../../../helpers");
let CreatePassResolver = class CreatePassResolver {
    async createPass(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pass_1.Pass, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreatePassArgs_1.CreatePassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreatePassResolver.prototype, "createPass", null);
CreatePassResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pass_1.Pass)
], CreatePassResolver);
exports.CreatePassResolver = CreatePassResolver;
