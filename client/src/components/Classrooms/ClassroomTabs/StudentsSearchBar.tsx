import { match } from "assert";
import React from "react";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import { StudentsSearchBarQuery } from "./__generated__/StudentsSearchBarQuery.graphql";

const StudentsSearchBar: React.FC = () => {
  return <div>Students Search Bar</div>;
};

export default StudentsSearchBar;
