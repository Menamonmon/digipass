import React from "react";
import { FullStudent } from "../ClassroomStudentsTab";

const PassesSublistItem: React.FC<FullStudent["passes"][0]> = ({
  endTime,
  startTime,
  duration,
  reason,
}) => {
  return (
    <div className="px-2 text-sm border-b-2 rounded-lg border-b-black bg-slate-500">
      <p className="line-clamp-1">Reason: {reason}</p>
      {startTime && endTime && (
        <p>
          {startTime as Date} {endTime as Date}
        </p>
      )}
      <p>Duration: {duration}</p>
    </div>
  );
};

export default PassesSublistItem;
