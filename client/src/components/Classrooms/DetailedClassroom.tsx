import Link from "next/link";
import React from "react";
import { HiClock, HiLockClosed, HiLockOpen } from "react-icons/hi";
import { MdContentCopy, MdEdit } from "react-icons/md";

interface DetailedClassroomProps {
  id: string;
  title: string;
  description?: string | null;
  classCode: string;
  createdAt: Date;
  archived: boolean;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}

export const DetailedClassroom: React.FC<DetailedClassroomProps> = ({
  id,
  title,
  description,
  classCode,
  createdAt,
  archived,
  startHour,
  endHour,
  startMinute,
  endMinute,
}) => {
  const archive = () => {};
  return (
    <div className="p-3 rounded-lg w-96 bg-secondary">
      <div className="flex items-center justify-between text-primary">
        <h4 className="inline">{title}</h4>
        {!archived ? (
          <button
            className="flex justify-center text-2xl btn btn-circle btn-sm tooltip"
            onClick={archive}
            data-tip="Click to archive"
          >
            <HiLockOpen />
          </button>
        ) : (
          <div className="text-2xl tooltip" data-tip="Archived Class">
            <HiLockClosed />
          </div>
        )}
      </div>
      <p className="text-gray-800 line-clamp-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
        doloremque, vel commodi quidem officiis eos deserunt ex tenetur sapiente
        quos aliquid quibusdam quam ad ipsam assumenda praesentium animi vitae!
        Rerum!
      </p>
      {/* Footer */}
      <div className="flex justify-between mt-2">
        <div className="inline-flex items-center gap-2">
          <p className="text-2xl text-primary">
            <HiClock />
          </p>
          <div className="text-green-600">
            {startHour}:{startMinute}
          </div>
          <div className="text-black">to</div>
          <div className="text-red-600">
            {endHour}:{endMinute}
          </div>
        </div>
        <div className="flex gap-2">
          <button className="text-xl btn btn-circle btn-sm">
            <MdEdit />
          </button>
          <button
            className="flex items-center text-xl btn btn-circle btn-sm tooltip"
            data-tip="Copy class code"
          >
            <MdContentCopy />
          </button>
        </div>
      </div>
    </div>
  );
};
