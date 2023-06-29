import clsx from "clsx";
import React from "react";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillHourglass,
} from "react-icons/ai";
import { MdError } from "react-icons/md";

const PassStatusButton: React.FC<{ approved: boolean; startTime?: string }> = ({
  approved,
  startTime,
}) => {
  const startDateObj = startTime ? new Date(startTime) : null;
  const pending =
    !approved && (!startDateObj || (startDateObj && startDateObj > new Date()));
  let Icon = AiFillCloseCircle;
  let msg = "Rejected!";
  if (approved) {
    Icon = AiFillCheckCircle;
    msg = "Approved!";
  } else if (pending) {
    Icon = AiFillHourglass;
    msg = "Pending!";
  } else if (!approved && !pending) {
    msg = "Rejected!";
  } else {
    msg = "Error occurred while processing time for pass!";
    Icon = MdError;
  }
  return (
    <div
      className={clsx(
        "tooltip btn btn-sm btn-circle p-1.5 flex justify-center items-center text-xl hover:cursor-default",
        pending && "bg-gray-600 hover:bg-gray-500",
        approved && "bg-green-600 hover:bg-green-500",
        !approved && !pending && "bg-red-600 hover:bg-red-500"
      )}
      data-tip={msg}
    >
      <Icon />
    </div>
  );
};

export default PassStatusButton;
