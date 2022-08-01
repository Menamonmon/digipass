/**
 * @generated SignedSource<<71f1a92b5fc7eaf4ac4eae2b5883f58d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RegisterStudentMutation$variables = {
  idToken: string;
};
export type RegisterStudentMutation$data = {
  readonly registerStudentWithGoogle: {
    readonly jwt: string;
    readonly userType: string;
  } | null;
};
export type RegisterStudentMutation = {
  response: RegisterStudentMutation$data;
  variables: RegisterStudentMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "idToken"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "idToken",
        "variableName": "idToken"
      }
    ],
    "concreteType": "StudentRegistrationResponse",
    "kind": "LinkedField",
    "name": "registerStudentWithGoogle",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "jwt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userType",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RegisterStudentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RegisterStudentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9b8411e9ad3307ece180313da447fc92",
    "id": null,
    "metadata": {},
    "name": "RegisterStudentMutation",
    "operationKind": "mutation",
    "text": "mutation RegisterStudentMutation(\n  $idToken: String!\n) {\n  registerStudentWithGoogle(idToken: $idToken) {\n    jwt\n    userType\n  }\n}\n"
  }
};
})();

(node as any).hash = "29dbeb232aa4048bf90148f7ff9d3bc3";

export default node;
