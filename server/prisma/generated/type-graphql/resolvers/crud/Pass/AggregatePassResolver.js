"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePassResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePassArgs_1 = require("./args/AggregatePassArgs");
const Pass_1 = require("../../../models/Pass");
const AggregatePass_1 = require("../../outputs/AggregatePass");
const helpers_1 = require("../../../helpers");
let AggregatePassResolver = class AggregatePassResolver {
    async aggregatePass(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePass_1.AggregatePass, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePassArgs_1.AggregatePassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregatePassResolver.prototype, "aggregatePass", null);
AggregatePassResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pass_1.Pass)
], AggregatePassResolver);
exports.AggregatePassResolver = AggregatePassResolver;
