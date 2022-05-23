"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Student: crudResolvers.StudentCrudResolver,
    IPAddress: crudResolvers.IPAddressCrudResolver,
    Teacher: crudResolvers.TeacherCrudResolver,
    Classroom: crudResolvers.ClassroomCrudResolver,
    Pass: crudResolvers.PassCrudResolver
};
const actionResolversMap = {
    Student: {
        student: actionResolvers.FindUniqueStudentResolver,
        findFirstStudent: actionResolvers.FindFirstStudentResolver,
        students: actionResolvers.FindManyStudentResolver,
        createStudent: actionResolvers.CreateStudentResolver,
        createManyStudent: actionResolvers.CreateManyStudentResolver,
        deleteStudent: actionResolvers.DeleteStudentResolver,
        updateStudent: actionResolvers.UpdateStudentResolver,
        deleteManyStudent: actionResolvers.DeleteManyStudentResolver,
        updateManyStudent: actionResolvers.UpdateManyStudentResolver,
        upsertStudent: actionResolvers.UpsertStudentResolver,
        aggregateStudent: actionResolvers.AggregateStudentResolver,
        groupByStudent: actionResolvers.GroupByStudentResolver
    },
    IPAddress: {
        iPAddress: actionResolvers.FindUniqueIPAddressResolver,
        findFirstIPAddress: actionResolvers.FindFirstIPAddressResolver,
        iPAddresses: actionResolvers.FindManyIPAddressResolver,
        createIPAddress: actionResolvers.CreateIPAddressResolver,
        createManyIPAddress: actionResolvers.CreateManyIPAddressResolver,
        deleteIPAddress: actionResolvers.DeleteIPAddressResolver,
        updateIPAddress: actionResolvers.UpdateIPAddressResolver,
        deleteManyIPAddress: actionResolvers.DeleteManyIPAddressResolver,
        updateManyIPAddress: actionResolvers.UpdateManyIPAddressResolver,
        upsertIPAddress: actionResolvers.UpsertIPAddressResolver,
        aggregateIPAddress: actionResolvers.AggregateIPAddressResolver,
        groupByIPAddress: actionResolvers.GroupByIPAddressResolver
    },
    Teacher: {
        teacher: actionResolvers.FindUniqueTeacherResolver,
        findFirstTeacher: actionResolvers.FindFirstTeacherResolver,
        teachers: actionResolvers.FindManyTeacherResolver,
        createTeacher: actionResolvers.CreateTeacherResolver,
        createManyTeacher: actionResolvers.CreateManyTeacherResolver,
        deleteTeacher: actionResolvers.DeleteTeacherResolver,
        updateTeacher: actionResolvers.UpdateTeacherResolver,
        deleteManyTeacher: actionResolvers.DeleteManyTeacherResolver,
        updateManyTeacher: actionResolvers.UpdateManyTeacherResolver,
        upsertTeacher: actionResolvers.UpsertTeacherResolver,
        aggregateTeacher: actionResolvers.AggregateTeacherResolver,
        groupByTeacher: actionResolvers.GroupByTeacherResolver
    },
    Classroom: {
        classroom: actionResolvers.FindUniqueClassroomResolver,
        findFirstClassroom: actionResolvers.FindFirstClassroomResolver,
        classrooms: actionResolvers.FindManyClassroomResolver,
        createClassroom: actionResolvers.CreateClassroomResolver,
        createManyClassroom: actionResolvers.CreateManyClassroomResolver,
        deleteClassroom: actionResolvers.DeleteClassroomResolver,
        updateClassroom: actionResolvers.UpdateClassroomResolver,
        deleteManyClassroom: actionResolvers.DeleteManyClassroomResolver,
        updateManyClassroom: actionResolvers.UpdateManyClassroomResolver,
        upsertClassroom: actionResolvers.UpsertClassroomResolver,
        aggregateClassroom: actionResolvers.AggregateClassroomResolver,
        groupByClassroom: actionResolvers.GroupByClassroomResolver
    },
    Pass: {
        pass: actionResolvers.FindUniquePassResolver,
        findFirstPass: actionResolvers.FindFirstPassResolver,
        passes: actionResolvers.FindManyPassResolver,
        createPass: actionResolvers.CreatePassResolver,
        createManyPass: actionResolvers.CreateManyPassResolver,
        deletePass: actionResolvers.DeletePassResolver,
        updatePass: actionResolvers.UpdatePassResolver,
        deleteManyPass: actionResolvers.DeleteManyPassResolver,
        updateManyPass: actionResolvers.UpdateManyPassResolver,
        upsertPass: actionResolvers.UpsertPassResolver,
        aggregatePass: actionResolvers.AggregatePassResolver,
        groupByPass: actionResolvers.GroupByPassResolver
    }
};
const crudResolversInfo = {
    Student: ["student", "findFirstStudent", "students", "createStudent", "createManyStudent", "deleteStudent", "updateStudent", "deleteManyStudent", "updateManyStudent", "upsertStudent", "aggregateStudent", "groupByStudent"],
    IPAddress: ["iPAddress", "findFirstIPAddress", "iPAddresses", "createIPAddress", "createManyIPAddress", "deleteIPAddress", "updateIPAddress", "deleteManyIPAddress", "updateManyIPAddress", "upsertIPAddress", "aggregateIPAddress", "groupByIPAddress"],
    Teacher: ["teacher", "findFirstTeacher", "teachers", "createTeacher", "createManyTeacher", "deleteTeacher", "updateTeacher", "deleteManyTeacher", "updateManyTeacher", "upsertTeacher", "aggregateTeacher", "groupByTeacher"],
    Classroom: ["classroom", "findFirstClassroom", "classrooms", "createClassroom", "createManyClassroom", "deleteClassroom", "updateClassroom", "deleteManyClassroom", "updateManyClassroom", "upsertClassroom", "aggregateClassroom", "groupByClassroom"],
    Pass: ["pass", "findFirstPass", "passes", "createPass", "createManyPass", "deletePass", "updatePass", "deleteManyPass", "updateManyPass", "upsertPass", "aggregatePass", "groupByPass"]
};
const argsInfo = {
    FindUniqueStudentArgs: ["where"],
    FindFirstStudentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyStudentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateStudentArgs: ["data"],
    CreateManyStudentArgs: ["data", "skipDuplicates"],
    DeleteStudentArgs: ["where"],
    UpdateStudentArgs: ["data", "where"],
    DeleteManyStudentArgs: ["where"],
    UpdateManyStudentArgs: ["data", "where"],
    UpsertStudentArgs: ["where", "create", "update"],
    AggregateStudentArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByStudentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueIPAddressArgs: ["where"],
    FindFirstIPAddressArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyIPAddressArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateIPAddressArgs: ["data"],
    CreateManyIPAddressArgs: ["data", "skipDuplicates"],
    DeleteIPAddressArgs: ["where"],
    UpdateIPAddressArgs: ["data", "where"],
    DeleteManyIPAddressArgs: ["where"],
    UpdateManyIPAddressArgs: ["data", "where"],
    UpsertIPAddressArgs: ["where", "create", "update"],
    AggregateIPAddressArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByIPAddressArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueTeacherArgs: ["where"],
    FindFirstTeacherArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTeacherArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateTeacherArgs: ["data"],
    CreateManyTeacherArgs: ["data", "skipDuplicates"],
    DeleteTeacherArgs: ["where"],
    UpdateTeacherArgs: ["data", "where"],
    DeleteManyTeacherArgs: ["where"],
    UpdateManyTeacherArgs: ["data", "where"],
    UpsertTeacherArgs: ["where", "create", "update"],
    AggregateTeacherArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByTeacherArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueClassroomArgs: ["where"],
    FindFirstClassroomArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyClassroomArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateClassroomArgs: ["data"],
    CreateManyClassroomArgs: ["data", "skipDuplicates"],
    DeleteClassroomArgs: ["where"],
    UpdateClassroomArgs: ["data", "where"],
    DeleteManyClassroomArgs: ["where"],
    UpdateManyClassroomArgs: ["data", "where"],
    UpsertClassroomArgs: ["where", "create", "update"],
    AggregateClassroomArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByClassroomArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniquePassArgs: ["where"],
    FindFirstPassArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyPassArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreatePassArgs: ["data"],
    CreateManyPassArgs: ["data", "skipDuplicates"],
    DeletePassArgs: ["where"],
    UpdatePassArgs: ["data", "where"],
    DeleteManyPassArgs: ["where"],
    UpdateManyPassArgs: ["data", "where"],
    UpsertPassArgs: ["where", "create", "update"],
    AggregatePassArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByPassArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Student: relationResolvers.StudentRelationsResolver,
    IPAddress: relationResolvers.IPAddressRelationsResolver,
    Teacher: relationResolvers.TeacherRelationsResolver,
    Classroom: relationResolvers.ClassroomRelationsResolver,
    Pass: relationResolvers.PassRelationsResolver
};
const relationResolversInfo = {
    Student: ["ipAddresses", "classrooms", "passes"],
    IPAddress: ["owner"],
    Teacher: ["classrooms", "issuedPasses"],
    Classroom: ["students", "teacher", "passes"],
    Pass: ["student", "classroom", "issuer"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Student: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed"],
    IPAddress: ["id", "ownerId", "createdAt", "address"],
    Teacher: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin"],
    Classroom: ["id", "title", "description", "createdAt", "startTime", "endTime", "classCode", "teacherId"],
    Pass: ["id", "studentId", "classId", "createdAt", "startTime", "endTime", "duration", "issuerId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateStudent: ["_count", "_avg", "_sum", "_min", "_max"],
    StudentGroupBy: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateIPAddress: ["_count", "_avg", "_sum", "_min", "_max"],
    IPAddressGroupBy: ["id", "ownerId", "createdAt", "address", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateTeacher: ["_count", "_avg", "_sum", "_min", "_max"],
    TeacherGroupBy: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateClassroom: ["_count", "_avg", "_sum", "_min", "_max"],
    ClassroomGroupBy: ["id", "title", "description", "createdAt", "startTime", "endTime", "classCode", "teacherId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregatePass: ["_count", "_avg", "_sum", "_min", "_max"],
    PassGroupBy: ["id", "studentId", "classId", "createdAt", "startTime", "endTime", "duration", "issuerId", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    StudentCount: ["ipAddresses", "classrooms", "passes"],
    StudentCountAggregate: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed", "_all"],
    StudentAvgAggregate: ["id", "passesUsed"],
    StudentSumAggregate: ["id", "passesUsed"],
    StudentMinAggregate: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed"],
    StudentMaxAggregate: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed"],
    IPAddressCountAggregate: ["id", "ownerId", "createdAt", "address", "_all"],
    IPAddressAvgAggregate: ["id", "ownerId"],
    IPAddressSumAggregate: ["id", "ownerId"],
    IPAddressMinAggregate: ["id", "ownerId", "createdAt", "address"],
    IPAddressMaxAggregate: ["id", "ownerId", "createdAt", "address"],
    TeacherCount: ["classrooms", "issuedPasses"],
    TeacherCountAggregate: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "_all"],
    TeacherAvgAggregate: ["id"],
    TeacherSumAggregate: ["id"],
    TeacherMinAggregate: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin"],
    TeacherMaxAggregate: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin"],
    ClassroomCount: ["students", "passes"],
    ClassroomCountAggregate: ["id", "title", "description", "createdAt", "startTime", "endTime", "classCode", "teacherId", "_all"],
    ClassroomAvgAggregate: ["id", "teacherId"],
    ClassroomSumAggregate: ["id", "teacherId"],
    ClassroomMinAggregate: ["id", "title", "description", "createdAt", "startTime", "endTime", "classCode", "teacherId"],
    ClassroomMaxAggregate: ["id", "title", "description", "createdAt", "startTime", "endTime", "classCode", "teacherId"],
    PassCountAggregate: ["id", "studentId", "classId", "createdAt", "startTime", "endTime", "duration", "issuerId", "_all"],
    PassAvgAggregate: ["id", "studentId", "classId", "duration", "issuerId"],
    PassSumAggregate: ["id", "studentId", "classId", "duration", "issuerId"],
    PassMinAggregate: ["id", "studentId", "classId", "createdAt", "startTime", "endTime", "duration", "issuerId"],
    PassMaxAggregate: ["id", "studentId", "classId", "createdAt", "startTime", "endTime", "duration", "issuerId"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    StudentWhereInput: ["AND", "OR", "NOT", "id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed", "ipAddresses", "classrooms", "passes"],
    StudentOrderByWithRelationInput: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed", "ipAddresses", "classrooms", "passes"],
    StudentWhereUniqueInput: ["id"],
    StudentOrderByWithAggregationInput: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed", "_count", "_avg", "_max", "_min", "_sum"],
    StudentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed"],
    IPAddressWhereInput: ["AND", "OR", "NOT", "id", "owner", "ownerId", "createdAt", "address"],
    IPAddressOrderByWithRelationInput: ["id", "owner", "ownerId", "createdAt", "address"],
    IPAddressWhereUniqueInput: ["id"],
    IPAddressOrderByWithAggregationInput: ["id", "ownerId", "createdAt", "address", "_count", "_avg", "_max", "_min", "_sum"],
    IPAddressScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "ownerId", "createdAt", "address"],
    TeacherWhereInput: ["AND", "OR", "NOT", "id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "classrooms", "issuedPasses"],
    TeacherOrderByWithRelationInput: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "classrooms", "issuedPasses"],
    TeacherWhereUniqueInput: ["id"],
    TeacherOrderByWithAggregationInput: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "_count", "_avg", "_max", "_min", "_sum"],
    TeacherScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin"],
    ClassroomWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "createdAt", "startTime", "endTime", "classCode", "students", "teacher", "teacherId", "passes"],
    ClassroomOrderByWithRelationInput: ["id", "title", "description", "createdAt", "startTime", "endTime", "classCode", "students", "teacher", "teacherId", "passes"],
    ClassroomWhereUniqueInput: ["id"],
    ClassroomOrderByWithAggregationInput: ["id", "title", "description", "createdAt", "startTime", "endTime", "classCode", "teacherId", "_count", "_avg", "_max", "_min", "_sum"],
    ClassroomScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "createdAt", "startTime", "endTime", "classCode", "teacherId"],
    PassWhereInput: ["AND", "OR", "NOT", "id", "student", "studentId", "classroom", "classId", "createdAt", "startTime", "endTime", "duration", "issuer", "issuerId"],
    PassOrderByWithRelationInput: ["id", "student", "studentId", "classroom", "classId", "createdAt", "startTime", "endTime", "duration", "issuer", "issuerId"],
    PassWhereUniqueInput: ["id"],
    PassOrderByWithAggregationInput: ["id", "studentId", "classId", "createdAt", "startTime", "endTime", "duration", "issuerId", "_count", "_avg", "_max", "_min", "_sum"],
    PassScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "studentId", "classId", "createdAt", "startTime", "endTime", "duration", "issuerId"],
    StudentCreateInput: ["email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed", "ipAddresses", "classrooms", "passes"],
    StudentUpdateInput: ["email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed", "ipAddresses", "classrooms", "passes"],
    StudentCreateManyInput: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed"],
    StudentUpdateManyMutationInput: ["email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed"],
    IPAddressCreateInput: ["owner", "createdAt", "address"],
    IPAddressUpdateInput: ["owner", "createdAt", "address"],
    IPAddressCreateManyInput: ["id", "ownerId", "createdAt", "address"],
    IPAddressUpdateManyMutationInput: ["createdAt", "address"],
    TeacherCreateInput: ["email", "firstName", "lastName", "password", "createdAt", "lastLogin", "classrooms", "issuedPasses"],
    TeacherUpdateInput: ["email", "firstName", "lastName", "password", "createdAt", "lastLogin", "classrooms", "issuedPasses"],
    TeacherCreateManyInput: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin"],
    TeacherUpdateManyMutationInput: ["email", "firstName", "lastName", "password", "createdAt", "lastLogin"],
    ClassroomCreateInput: ["title", "description", "createdAt", "startTime", "endTime", "classCode", "students", "teacher", "passes"],
    ClassroomUpdateInput: ["title", "description", "createdAt", "startTime", "endTime", "classCode", "students", "teacher", "passes"],
    ClassroomCreateManyInput: ["id", "title", "description", "createdAt", "startTime", "endTime", "classCode", "teacherId"],
    ClassroomUpdateManyMutationInput: ["title", "description", "createdAt", "startTime", "endTime", "classCode"],
    PassCreateInput: ["student", "classroom", "createdAt", "startTime", "endTime", "duration", "issuer"],
    PassUpdateInput: ["student", "classroom", "createdAt", "startTime", "endTime", "duration", "issuer"],
    PassCreateManyInput: ["id", "studentId", "classId", "createdAt", "startTime", "endTime", "duration", "issuerId"],
    PassUpdateManyMutationInput: ["createdAt", "startTime", "endTime", "duration"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    IPAddressListRelationFilter: ["every", "some", "none"],
    ClassroomListRelationFilter: ["every", "some", "none"],
    PassListRelationFilter: ["every", "some", "none"],
    IPAddressOrderByRelationAggregateInput: ["_count"],
    ClassroomOrderByRelationAggregateInput: ["_count"],
    PassOrderByRelationAggregateInput: ["_count"],
    StudentCountOrderByAggregateInput: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed"],
    StudentAvgOrderByAggregateInput: ["id", "passesUsed"],
    StudentMaxOrderByAggregateInput: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed"],
    StudentMinOrderByAggregateInput: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed"],
    StudentSumOrderByAggregateInput: ["id", "passesUsed"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StudentRelationFilter: ["is", "isNot"],
    IPAddressCountOrderByAggregateInput: ["id", "ownerId", "createdAt", "address"],
    IPAddressAvgOrderByAggregateInput: ["id", "ownerId"],
    IPAddressMaxOrderByAggregateInput: ["id", "ownerId", "createdAt", "address"],
    IPAddressMinOrderByAggregateInput: ["id", "ownerId", "createdAt", "address"],
    IPAddressSumOrderByAggregateInput: ["id", "ownerId"],
    TeacherCountOrderByAggregateInput: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin"],
    TeacherAvgOrderByAggregateInput: ["id"],
    TeacherMaxOrderByAggregateInput: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin"],
    TeacherMinOrderByAggregateInput: ["id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin"],
    TeacherSumOrderByAggregateInput: ["id"],
    StudentListRelationFilter: ["every", "some", "none"],
    TeacherRelationFilter: ["is", "isNot"],
    StudentOrderByRelationAggregateInput: ["_count"],
    ClassroomCountOrderByAggregateInput: ["id", "title", "description", "createdAt", "startTime", "endTime", "classCode", "teacherId"],
    ClassroomAvgOrderByAggregateInput: ["id", "teacherId"],
    ClassroomMaxOrderByAggregateInput: ["id", "title", "description", "createdAt", "startTime", "endTime", "classCode", "teacherId"],
    ClassroomMinOrderByAggregateInput: ["id", "title", "description", "createdAt", "startTime", "endTime", "classCode", "teacherId"],
    ClassroomSumOrderByAggregateInput: ["id", "teacherId"],
    ClassroomRelationFilter: ["is", "isNot"],
    PassCountOrderByAggregateInput: ["id", "studentId", "classId", "createdAt", "startTime", "endTime", "duration", "issuerId"],
    PassAvgOrderByAggregateInput: ["id", "studentId", "classId", "duration", "issuerId"],
    PassMaxOrderByAggregateInput: ["id", "studentId", "classId", "createdAt", "startTime", "endTime", "duration", "issuerId"],
    PassMinOrderByAggregateInput: ["id", "studentId", "classId", "createdAt", "startTime", "endTime", "duration", "issuerId"],
    PassSumOrderByAggregateInput: ["id", "studentId", "classId", "duration", "issuerId"],
    IPAddressCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
    ClassroomCreateNestedManyWithoutStudentsInput: ["create", "connectOrCreate", "connect"],
    PassCreateNestedManyWithoutStudentInput: ["create", "connectOrCreate", "createMany", "connect"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    IPAddressUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ClassroomUpdateManyWithoutStudentsInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    PassUpdateManyWithoutStudentInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    StudentCreateNestedOneWithoutIpAddressesInput: ["create", "connectOrCreate", "connect"],
    StudentUpdateOneWithoutIpAddressesInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    ClassroomCreateNestedManyWithoutTeacherInput: ["create", "connectOrCreate", "createMany", "connect"],
    PassCreateNestedManyWithoutIssuerInput: ["create", "connectOrCreate", "createMany", "connect"],
    ClassroomUpdateManyWithoutTeacherInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    PassUpdateManyWithoutIssuerInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    StudentCreateNestedManyWithoutClassroomsInput: ["create", "connectOrCreate", "connect"],
    TeacherCreateNestedOneWithoutClassroomsInput: ["create", "connectOrCreate", "connect"],
    PassCreateNestedManyWithoutClassroomInput: ["create", "connectOrCreate", "createMany", "connect"],
    StudentUpdateManyWithoutClassroomsInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    TeacherUpdateOneWithoutClassroomsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    PassUpdateManyWithoutClassroomInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    StudentCreateNestedOneWithoutPassesInput: ["create", "connectOrCreate", "connect"],
    ClassroomCreateNestedOneWithoutPassesInput: ["create", "connectOrCreate", "connect"],
    TeacherCreateNestedOneWithoutIssuedPassesInput: ["create", "connectOrCreate", "connect"],
    StudentUpdateOneWithoutPassesInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    ClassroomUpdateOneWithoutPassesInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    TeacherUpdateOneWithoutIssuedPassesInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    IPAddressCreateWithoutOwnerInput: ["createdAt", "address"],
    IPAddressCreateOrConnectWithoutOwnerInput: ["where", "create"],
    IPAddressCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
    ClassroomCreateWithoutStudentsInput: ["title", "description", "createdAt", "startTime", "endTime", "classCode", "teacher", "passes"],
    ClassroomCreateOrConnectWithoutStudentsInput: ["where", "create"],
    PassCreateWithoutStudentInput: ["classroom", "createdAt", "startTime", "endTime", "duration", "issuer"],
    PassCreateOrConnectWithoutStudentInput: ["where", "create"],
    PassCreateManyStudentInputEnvelope: ["data", "skipDuplicates"],
    IPAddressUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
    IPAddressUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
    IPAddressUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
    IPAddressScalarWhereInput: ["AND", "OR", "NOT", "id", "ownerId", "createdAt", "address"],
    ClassroomUpsertWithWhereUniqueWithoutStudentsInput: ["where", "update", "create"],
    ClassroomUpdateWithWhereUniqueWithoutStudentsInput: ["where", "data"],
    ClassroomUpdateManyWithWhereWithoutStudentsInput: ["where", "data"],
    ClassroomScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "createdAt", "startTime", "endTime", "classCode", "teacherId"],
    PassUpsertWithWhereUniqueWithoutStudentInput: ["where", "update", "create"],
    PassUpdateWithWhereUniqueWithoutStudentInput: ["where", "data"],
    PassUpdateManyWithWhereWithoutStudentInput: ["where", "data"],
    PassScalarWhereInput: ["AND", "OR", "NOT", "id", "studentId", "classId", "createdAt", "startTime", "endTime", "duration", "issuerId"],
    StudentCreateWithoutIpAddressesInput: ["email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed", "classrooms", "passes"],
    StudentCreateOrConnectWithoutIpAddressesInput: ["where", "create"],
    StudentUpsertWithoutIpAddressesInput: ["update", "create"],
    StudentUpdateWithoutIpAddressesInput: ["email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed", "classrooms", "passes"],
    ClassroomCreateWithoutTeacherInput: ["title", "description", "createdAt", "startTime", "endTime", "classCode", "students", "passes"],
    ClassroomCreateOrConnectWithoutTeacherInput: ["where", "create"],
    ClassroomCreateManyTeacherInputEnvelope: ["data", "skipDuplicates"],
    PassCreateWithoutIssuerInput: ["student", "classroom", "createdAt", "startTime", "endTime", "duration"],
    PassCreateOrConnectWithoutIssuerInput: ["where", "create"],
    PassCreateManyIssuerInputEnvelope: ["data", "skipDuplicates"],
    ClassroomUpsertWithWhereUniqueWithoutTeacherInput: ["where", "update", "create"],
    ClassroomUpdateWithWhereUniqueWithoutTeacherInput: ["where", "data"],
    ClassroomUpdateManyWithWhereWithoutTeacherInput: ["where", "data"],
    PassUpsertWithWhereUniqueWithoutIssuerInput: ["where", "update", "create"],
    PassUpdateWithWhereUniqueWithoutIssuerInput: ["where", "data"],
    PassUpdateManyWithWhereWithoutIssuerInput: ["where", "data"],
    StudentCreateWithoutClassroomsInput: ["email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed", "ipAddresses", "passes"],
    StudentCreateOrConnectWithoutClassroomsInput: ["where", "create"],
    TeacherCreateWithoutClassroomsInput: ["email", "firstName", "lastName", "password", "createdAt", "lastLogin", "issuedPasses"],
    TeacherCreateOrConnectWithoutClassroomsInput: ["where", "create"],
    PassCreateWithoutClassroomInput: ["student", "createdAt", "startTime", "endTime", "duration", "issuer"],
    PassCreateOrConnectWithoutClassroomInput: ["where", "create"],
    PassCreateManyClassroomInputEnvelope: ["data", "skipDuplicates"],
    StudentUpsertWithWhereUniqueWithoutClassroomsInput: ["where", "update", "create"],
    StudentUpdateWithWhereUniqueWithoutClassroomsInput: ["where", "data"],
    StudentUpdateManyWithWhereWithoutClassroomsInput: ["where", "data"],
    StudentScalarWhereInput: ["AND", "OR", "NOT", "id", "email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed"],
    TeacherUpsertWithoutClassroomsInput: ["update", "create"],
    TeacherUpdateWithoutClassroomsInput: ["email", "firstName", "lastName", "password", "createdAt", "lastLogin", "issuedPasses"],
    PassUpsertWithWhereUniqueWithoutClassroomInput: ["where", "update", "create"],
    PassUpdateWithWhereUniqueWithoutClassroomInput: ["where", "data"],
    PassUpdateManyWithWhereWithoutClassroomInput: ["where", "data"],
    StudentCreateWithoutPassesInput: ["email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed", "ipAddresses", "classrooms"],
    StudentCreateOrConnectWithoutPassesInput: ["where", "create"],
    ClassroomCreateWithoutPassesInput: ["title", "description", "createdAt", "startTime", "endTime", "classCode", "students", "teacher"],
    ClassroomCreateOrConnectWithoutPassesInput: ["where", "create"],
    TeacherCreateWithoutIssuedPassesInput: ["email", "firstName", "lastName", "password", "createdAt", "lastLogin", "classrooms"],
    TeacherCreateOrConnectWithoutIssuedPassesInput: ["where", "create"],
    StudentUpsertWithoutPassesInput: ["update", "create"],
    StudentUpdateWithoutPassesInput: ["email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed", "ipAddresses", "classrooms"],
    ClassroomUpsertWithoutPassesInput: ["update", "create"],
    ClassroomUpdateWithoutPassesInput: ["title", "description", "createdAt", "startTime", "endTime", "classCode", "students", "teacher"],
    TeacherUpsertWithoutIssuedPassesInput: ["update", "create"],
    TeacherUpdateWithoutIssuedPassesInput: ["email", "firstName", "lastName", "password", "createdAt", "lastLogin", "classrooms"],
    IPAddressCreateManyOwnerInput: ["id", "createdAt", "address"],
    PassCreateManyStudentInput: ["id", "classId", "createdAt", "startTime", "endTime", "duration", "issuerId"],
    IPAddressUpdateWithoutOwnerInput: ["createdAt", "address"],
    ClassroomUpdateWithoutStudentsInput: ["title", "description", "createdAt", "startTime", "endTime", "classCode", "teacher", "passes"],
    PassUpdateWithoutStudentInput: ["classroom", "createdAt", "startTime", "endTime", "duration", "issuer"],
    ClassroomCreateManyTeacherInput: ["id", "title", "description", "createdAt", "startTime", "endTime", "classCode"],
    PassCreateManyIssuerInput: ["id", "studentId", "classId", "createdAt", "startTime", "endTime", "duration"],
    ClassroomUpdateWithoutTeacherInput: ["title", "description", "createdAt", "startTime", "endTime", "classCode", "students", "passes"],
    PassUpdateWithoutIssuerInput: ["student", "classroom", "createdAt", "startTime", "endTime", "duration"],
    PassCreateManyClassroomInput: ["id", "studentId", "createdAt", "startTime", "endTime", "duration", "issuerId"],
    StudentUpdateWithoutClassroomsInput: ["email", "firstName", "lastName", "password", "createdAt", "lastLogin", "studentId", "passesUsed", "ipAddresses", "passes"],
    PassUpdateWithoutClassroomInput: ["student", "createdAt", "startTime", "endTime", "duration", "issuer"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
