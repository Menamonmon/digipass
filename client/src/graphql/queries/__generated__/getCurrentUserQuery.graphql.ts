/**
 * @generated SignedSource<<118effb5c6105af52b7dfdded84cfe5a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getCurrentUserQuery$variables = {};
export type getCurrentUserQuery$data = {
  readonly currentUser: {
    readonly email: string;
    readonly firstName: string;
    readonly id: string;
    readonly lastName: string;
    readonly pictureUrl: string;
  } | null;
};
export type getCurrentUserQuery = {
  response: getCurrentUserQuery$data;
  variables: getCurrentUserQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "CurrentUser",
    "kind": "LinkedField",
    "name": "currentUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "firstName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "pictureUrl",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getCurrentUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getCurrentUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "7d6138c1eaa60e816d428719734df09a",
    "id": null,
    "metadata": {},
    "name": "getCurrentUserQuery",
    "operationKind": "query",
    "text": "query getCurrentUserQuery {\n  currentUser {\n    id\n    firstName\n    lastName\n    email\n    pictureUrl\n  }\n}\n"
  }
};
})();

(node as any).hash = "6bbac72b6a6eb6fb82dff09795b10539";

export default node;
