import React from "react";
import CountdownTimer from "./CountdownTimer";



const CountdownTimerWrapper: React.FC<{}> = () => {
  const studentName = "Michael"
  const durationinMinutes = 15
  const reason = "reason"
    return (
      <div className="flex flex-col justify-center text-center pt-20">
        <div className="flex justify-center text-4xl font-sans hover:font-serif">
          Hello, {studentName}. You are alloted for {durationinMinutes} of Hall Pass for {reason}.
        </div>
        <div className="flex justify-center text-2xl font-sans hover:font-serif pt-10">
          Time Left:
        </div>
        <div className="flex justify-center pt-10">
        <CountdownTimer duration = {durationinMinutes}/>
        </div>
    </div>

  );
};

export default CountdownTimerWrapper;
