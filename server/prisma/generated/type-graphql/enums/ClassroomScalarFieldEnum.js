"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ClassroomScalarFieldEnum;
(function (ClassroomScalarFieldEnum) {
    ClassroomScalarFieldEnum["id"] = "id";
    ClassroomScalarFieldEnum["title"] = "title";
    ClassroomScalarFieldEnum["description"] = "description";
    ClassroomScalarFieldEnum["createdAt"] = "createdAt";
    ClassroomScalarFieldEnum["startTime"] = "startTime";
    ClassroomScalarFieldEnum["endTime"] = "endTime";
    ClassroomScalarFieldEnum["classCode"] = "classCode";
    ClassroomScalarFieldEnum["teacherId"] = "teacherId";
})(ClassroomScalarFieldEnum = exports.ClassroomScalarFieldEnum || (exports.ClassroomScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ClassroomScalarFieldEnum, {
    name: "ClassroomScalarFieldEnum",
    description: undefined,
});
