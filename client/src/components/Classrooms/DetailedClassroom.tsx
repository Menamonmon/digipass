import Link from "next/link";
import React, { useCallback } from "react";
import { HiClock, HiLockClosed, HiLockOpen } from "react-icons/hi";
import { MdContentCopy, MdEdit } from "react-icons/md";
import { useMutation } from "react-relay";
import { toast } from "react-toastify";
import { ArchiveClassroomMutation } from "../../graphql/mutations/ArchiveClassroomMutation";
import { ArchiveClassroomMutation as ArchiveClassroomMutationType } from "../../graphql/mutations/__generated__/ArchiveClassroomMutation.graphql";

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
  const [commitClassArchive, isArchivingClass] =
    useMutation<ArchiveClassroomMutationType>(ArchiveClassroomMutation);
  const archive = () => {
    commitClassArchive({
      variables: { classroomId: id },
      onCompleted(response, errors) {
        if (response.archiveClassroom) {
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

  const notifyOfSuccessfulCopy = () =>
    toast("Copied", {
      autoClose: 500,
      type: "success",
      pauseOnFocusLoss: false,
      pauseOnHover: false,
    });
  const copyClassCodeToClipboard = useCallback(async () => {
    navigator.clipboard.writeText(classCode).then(notifyOfSuccessfulCopy);
  }, [classCode]);

  const createdAtDate = new Date(createdAt);
  const formattedCreatedAtDate = `${
    createdAtDate.getMonth() + 1
  }/${createdAtDate.getDate()}/${createdAtDate.getFullYear()}`;

  return (
    <div className="p-3 rounded-lg h-50 w-96 bg-secondary">
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
          >
            <HiLockOpen />
          </button>
        ) : (
          <div className="text-2xl tooltip" data-tip="Archived Class">
            <HiLockClosed />
          </div>
        )}
      </div>
      <p className="text-gray-800 line-clamp-4">{description}</p>
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
          <Link href={`/teacher/classrooms/${id}/edit`}>
            <button className="text-xl btn btn-circle btn-sm">
              <MdEdit />
            </button>
          </Link>
          <button
            className="flex items-center text-xl btn btn-circle btn-sm tooltip"
            data-tip="Copy class code"
            onClick={copyClassCodeToClipboard}
          >
            <MdContentCopy />
          </button>
        </div>
      </div>
    </div>
  );
};
