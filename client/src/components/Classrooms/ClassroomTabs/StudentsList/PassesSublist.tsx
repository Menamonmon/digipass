import React from "react";
import { FullStudent } from "../ClassroomStudentsTab";
import PassesSublistItem from "./PassesSublistItem";

interface PassesSublistProps {
  passes: FullStudent["passes"];
}

const PassesSublist: React.FC<PassesSublistProps> = ({ passes }) => {
  return (
    <div className="px-3 py-1 mx-6 bg-gray-800 rounded-b-lg">
      {passes.length === 0 ? (
        <div>This student does not have any passes!</div>
      ) : (
        passes.map((pass, idx) => <PassesSublistItem {...pass} key={idx} />)
      )}
    </div>
  );
};

export default PassesSublist;
