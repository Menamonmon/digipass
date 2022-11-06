import Image from "next/image";
import React, { useState } from "react";
import { FullStudent } from "../ClassroomStudentsTab";
import PassesSublist from "./PassesSublist";
import { BiChevronDownCircle, BiChevronUpCircle } from "react-icons/bi";

const ClassroomStudentsItem: React.FC<FullStudent> = ({
  userProfile: { firstName, lastName, email, pictureUrl },
  passes,
}) => {
  const [viewingPasses, setViewingPasses] = useState(false);
  return (
    <li>
      <div
        onClick={() => setViewingPasses((prev) => !prev)}
        className="flex items-center justify-between p-2 mx-3 bg-gray-700 rounded-lg hover:bg-gray-800 hover:cursor-pointer"
      >
        <div>
          <p>
            {firstName} {lastName}
          </p>
          <p className="text-xs">{email}</p>
        </div>
        <div className="flex items-center justify-between gap-5">
          <Image
            src={pictureUrl}
            width="50px"
            height="50px"
            className="rounded-full"
          />
          <h3>
            {viewingPasses ? <BiChevronUpCircle /> : <BiChevronDownCircle />}
          </h3>
        </div>
      </div>
      {viewingPasses && <PassesSublist passes={passes} />}
    </li>
  );
};

export default ClassroomStudentsItem;
