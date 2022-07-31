/**
 * @generated SignedSource<<5bd87cd3332cbedc02519f67393cd6d1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type registerStudentMutation$variables = {
  idToken: string;
};
export type registerStudentMutation$data = {
  readonly registerStudentWithGoogle: {
    readonly jwt: string;
    readonly userType: string;
  } | null;
};
export type registerStudentMutation = {
  response: registerStudentMutation$data;
  variables: registerStudentMutation$variables;
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
    "name": "registerStudentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "registerStudentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0f2909944a3991eeb8318f05149fb548",
    "id": null,
    "metadata": {},
    "name": "registerStudentMutation",
    "operationKind": "mutation",
    "text": "mutation registerStudentMutation(\n  $idToken: String!\n) {\n  registerStudentWithGoogle(idToken: $idToken) {\n    jwt\n    userType\n  }\n}\n"
  }
};
})();

(node as any).hash = "092bb8709d36ce7a70301f25fb5b592c";

export default node;
