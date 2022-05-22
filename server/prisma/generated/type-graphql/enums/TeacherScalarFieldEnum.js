"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TeacherScalarFieldEnum;
(function (TeacherScalarFieldEnum) {
    TeacherScalarFieldEnum["id"] = "id";
    TeacherScalarFieldEnum["email"] = "email";
    TeacherScalarFieldEnum["firstName"] = "firstName";
    TeacherScalarFieldEnum["lastName"] = "lastName";
    TeacherScalarFieldEnum["password"] = "password";
    TeacherScalarFieldEnum["createdAt"] = "createdAt";
    TeacherScalarFieldEnum["lastLogin"] = "lastLogin";
})(TeacherScalarFieldEnum = exports.TeacherScalarFieldEnum || (exports.TeacherScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TeacherScalarFieldEnum, {
    name: "TeacherScalarFieldEnum",
    description: undefined,
});
