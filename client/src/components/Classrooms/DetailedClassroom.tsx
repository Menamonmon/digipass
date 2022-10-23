import Link from "next/link";
import React, { useCallback } from "react";
import { FcRefresh } from "react-icons/fc";
import { HiClock, HiLockClosed, HiLockOpen } from "react-icons/hi";
import { MdContentCopy, MdEdit } from "react-icons/md";
import { useMutation } from "react-relay";
import { toast } from "react-toastify";
import { ArchiveClassroomMutation } from "../../graphql/mutations/ArchiveClassroomMutation";
import { ArchiveClassroomMutation as ArchiveClassroomMutationType } from "../../graphql/mutations/__generated__/ArchiveClassroomMutation.graphql";
import CopyButton from "../Utils/CopyButton";

interface DetailedClassroomProps {
  id: string;
  title: string;
  description?: string | null;
  classCode: string;
  createdAt: string;
  archived: boolean;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  refresh: () => void;
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
  refresh,
}) => {
  const [commitClassArchive, isArchivingClass] =
    useMutation<ArchiveClassroomMutationType>(ArchiveClassroomMutation);
  const archive = () => {
    commitClassArchive({
      variables: { classroomId: id },
      onCompleted(response, errors) {
        if (response.archiveClassroom) {
          refresh();
          toast("Successfully archived class", {
            autoClose: 1000,
            type: "success",
          });
        }

        if (errors) {
          toast(
            "An error occurred while trying to archive the classroom. Try again later",
            {
              autoClose: 2000,
              type: "error",
            }
          );
        }
      },
    });
  };

  const createdAtDate = new Date(createdAt);
  const formattedCreatedAtDate = `${
    createdAtDate.getMonth() + 1
  }/${createdAtDate.getDate()}/${createdAtDate.getFullYear()}`;

  return (
    <div
      className="p-3 rounded-lg w-96 bg-secondary"
      style={{ minHeight: "190px" }}
    >
      <div className="flex items-center justify-between text-primary">
        <div className="flex items-center justify-center gap-2">
          <Link href={`/teacher/classrooms/${id}`}>
            <h4 className="hover:link">{title}</h4>
          </Link>
          <p className="text-gray-500">({formattedCreatedAtDate})</p>
        </div>
        {!archived ? (
          <button
            className="flex justify-center text-2xl btn btn-circle btn-sm tooltip"
            onClick={archive}
            data-tip="Archive class"
            disabled={isArchivingClass}
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores sint
        et cupiditate quam, nihil magni debitis, placeat cum tempore quae
        necessitatibus nisi labore ad enim porro autem obcaecati assumenda
        numquam?
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
        {!archived && (
          <div className="flex gap-2">
            <Link href={`/teacher/classrooms/${id}/edit`}>
              <button className="text-xl btn btn-circle btn-sm">
                <MdEdit />
              </button>
            </Link>
            <CopyButton value={classCode} />
          </div>
        )}
      </div>
    </div>
  );
};
