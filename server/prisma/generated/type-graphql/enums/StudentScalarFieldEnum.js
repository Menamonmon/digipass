"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var StudentScalarFieldEnum;
(function (StudentScalarFieldEnum) {
    StudentScalarFieldEnum["id"] = "id";
    StudentScalarFieldEnum["email"] = "email";
    StudentScalarFieldEnum["firstName"] = "firstName";
    StudentScalarFieldEnum["lastName"] = "lastName";
    StudentScalarFieldEnum["password"] = "password";
    StudentScalarFieldEnum["createdAt"] = "createdAt";
    StudentScalarFieldEnum["lastLogin"] = "lastLogin";
    StudentScalarFieldEnum["studentId"] = "studentId";
    StudentScalarFieldEnum["passesUsed"] = "passesUsed";
})(StudentScalarFieldEnum = exports.StudentScalarFieldEnum || (exports.StudentScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(StudentScalarFieldEnum, {
    name: "StudentScalarFieldEnum",
    description: undefined,
});
