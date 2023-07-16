import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import InputField from "../Utils/InputField";
import { graphql } from "relay-runtime";
import { useMutation } from "react-relay";
import { PassRequestFormMutation } from "./__generated__/PassRequestFormMutation.graphql";
import { toast } from "react-toastify";

interface PassRequestData {
  reason: string;
  duration: string;
}

const createPassMutation = graphql`
  mutation PassRequestFormMutation(
    $duration: Int!
    $reason: String!
    $classroomId: String!
  ) {
    studentCreatePass(
      duration: $duration
      reason: $reason
      classroomId: $classroomId
    ) {
      id
      reason
      createdAt
      approved
      startTime
      endTime
      duration
      classroomId
    }
  }
`;

interface PassRequestFormProps {
  classroomId: string;
}
const initialPassRequestData = {
  reason: "",
  duration: "",
};

const PassRequestForm: React.FC<PassRequestFormProps> = ({ classroomId }) => {
  const { userProfile } = useAuth();
  const [name, setName] = useState(
    `${userProfile?.firstName} ${userProfile?.lastName}`
  );

  useEffect(() => {
    setName(`${userProfile?.firstName} ${userProfile?.lastName}`);
  }, [userProfile]);

  const [passRequestData, setPassRequestData] = useState<PassRequestData>(
    initialPassRequestData
  );

  const resetState = () => {
    setPassRequestData(initialPassRequestData);
  };

  const [commit, isInFlight] =
    useMutation<PassRequestFormMutation>(createPassMutation);

  const handleChange = (value: string | number, fieldName: string) => {
    setPassRequestData((prevPassRequestData) => ({
      ...prevPassRequestData,
      [fieldName]: value,
    }));
  };

  const isReasonValid = (value: string | number): boolean => {
    return (value as string).trim().length > 0;
  };

  const isDurationValid = (value: string | number): boolean => {
    return (
      (value as string).trim().length > 0 &&
      Number.isInteger(Number(value)) &&
      Number(value) > 0 &&
      Number(value) < 30
    );
  };

  const handleFail = () => {
    resetState();
    toast(
      "An error ocurred while trying to process your request! Make sure this is the first pass that you request for this class. You can only request one pass for now!",
      { type: "error" }
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const reasonValid = isReasonValid(passRequestData.reason);
    const durationValid = isDurationValid(passRequestData.duration);
    if (!reasonValid || !durationValid) {
      // Display error messages or perform necessary error handling
      toast("Please check your inputs!", { type: "error", autoClose: 1000 });
      return false;
    }
    // Handle form submission here
    commit({
      variables: {
        classroomId,
        duration: Number(passRequestData.duration),
        reason: passRequestData.reason,
      },
      onCompleted: (response) => {
        // TODO: Start websocket connection protocols and take to the loading screen
        if (response.studentCreatePass) {
          resetState();
          toast("Pass Request Successfully Submitted!", { type: "success" });
        } else {
          handleFail();
        }
      },
      onError: handleFail,
    });
    return false;
  };

  return (
    <div className="flex items-start justify-center min-h-screen pt-16 bg-gray-800">
      <form className="w-full max-w-md p-8 bg-gray-900 border-2 shadow-lg rounded-xl border-primary">
        <h2 className="mb-6 text-2xl font-bold text-center text-primary">
          Hall Pass Request
        </h2>
        <div className="flex flex-col items-center [&>div]:flex [&>div]:flex-col justify-between">
          <div className="mb-4">
            <label htmlFor="name" className="text-primary">
              Name
            </label>
            <InputField
              name="name"
              value={name}
              onUpdate={handleChange}
              disabled
              className="border-b-2 text-primary border-primary-light focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="reason" className="text-primary">
              Reason
            </label>
            <InputField
              name="reason"
              value={passRequestData.reason}
              onUpdate={handleChange}
              className="border-b-2 text-primary border-primary-light focus:border-primary"
              isValid={isReasonValid}
              errorMessage="Please enter a valid reason"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="duration" className="text-primary">
              Duration
            </label>
            <InputField
              name="duration"
              value={passRequestData.duration}
              onUpdate={handleChange}
              className="border-b-2 text-primary border-primary-light focus:border-primary"
              isValid={isDurationValid}
              errorMessage="Please enter a valid duration"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            disabled={isInFlight}
            onClick={handleSubmit}
            className="px-4 py-2 text-white transition-colors duration-300 rounded bg-primary hover:bg-primary-dark"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PassRequestForm;
