"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassCreateManyClassroomInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateManyClassroomInput_1 = require("../inputs/PassCreateManyClassroomInput");
let PassCreateManyClassroomInputEnvelope = class PassCreateManyClassroomInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassCreateManyClassroomInput_1.PassCreateManyClassroomInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PassCreateManyClassroomInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PassCreateManyClassroomInputEnvelope.prototype, "skipDuplicates", void 0);
PassCreateManyClassroomInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PassCreateManyClassroomInputEnvelope", {
        isAbstract: true
    })
], PassCreateManyClassroomInputEnvelope);
exports.PassCreateManyClassroomInputEnvelope = PassCreateManyClassroomInputEnvelope;
