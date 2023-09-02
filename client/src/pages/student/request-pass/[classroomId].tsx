import React from "react";
import { useRouter } from "next/router";
import { useClassroomIdValidation } from "../../../hooks/useClassroomIdValidation";
import PassRequestForm from "../../../components/Passes/PassRequestForm";
import Link from "next/link";

const RequestPassPage: React.FC = () => {
  const router = useRouter();
  const classroomId = router.query["classroomId"];

  const isClassroomIdValid = useClassroomIdValidation(classroomId as string);
  return isClassroomIdValid ? (
    <PassRequestForm classroomId={classroomId as string} />
  ) : (
    <div>
      PLease check the classroom id that you requested for! You can manually
      retry here:
      <Link
        href={`/student/request-pass/pre-request-pass`}
        className="inline-block px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Proceed to Pass Request
      </Link>
    </div>
  );
};

export default RequestPassPage;
