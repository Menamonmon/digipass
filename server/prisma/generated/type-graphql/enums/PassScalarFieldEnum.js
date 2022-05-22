"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PassScalarFieldEnum;
(function (PassScalarFieldEnum) {
    PassScalarFieldEnum["id"] = "id";
    PassScalarFieldEnum["studentId"] = "studentId";
    PassScalarFieldEnum["classId"] = "classId";
    PassScalarFieldEnum["createdAt"] = "createdAt";
    PassScalarFieldEnum["startTime"] = "startTime";
    PassScalarFieldEnum["endTime"] = "endTime";
    PassScalarFieldEnum["duration"] = "duration";
    PassScalarFieldEnum["issuerId"] = "issuerId";
})(PassScalarFieldEnum = exports.PassScalarFieldEnum || (exports.PassScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PassScalarFieldEnum, {
    name: "PassScalarFieldEnum",
    description: undefined,
});
