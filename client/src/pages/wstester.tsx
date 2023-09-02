import { NextPage } from "next";
import React from "react";
import { useWebsocketActions } from "../hooks/useWebsocketAction";

const WsTesterPage: NextPage = () => {
  const actions = useWebsocketActions();
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          actions?.openQueueForClassroom(
            "e131a098-5380-4bd1-b38c-511cc1293096"
          );
        }}
      >
        ACTIONS
      </button>
    </div>
  );
};

export default WsTesterPage;
