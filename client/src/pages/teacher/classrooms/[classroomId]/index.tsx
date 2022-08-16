import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { ClassroomTabViewer } from "../../../../components/Classrooms/ClassroomTabs";

interface ViewClassroomPageProps {}

const ViewClassroomPage: NextPage<ViewClassroomPageProps> = () => {
  const router = useRouter();
  const { classroomId } = router.query;
  return (
    <div>
      {classroomId ? (
        <ClassroomTabViewer classroomId={classroomId as string} />
      ) : (
        <div>Classroom not found</div>
      )}
    </div>
  );
};

export default ViewClassroomPage;
