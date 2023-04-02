import { useState } from "react";
import React from "react";
import InputField from "../Utils/InputField";

type RequestPassFormInput = {
    reason: string,
    duration: number
}
const RequestPassForm: React.FC<{}> = () => {

    const [requestpassform, setRequestpassform] =
    useState<NonNullable<RequestPassFormInput>>({reason:"", duration:0});
    
    const validatePassRequest = () => {
        return false
    }
    const handleUpdate = () => {
        return true
    }
    const name ="Johnny"

    return (
    <div className="flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Request a Hall Pass</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  {/* <input
                    autoComplete="off"
                    id="name"
                    name="name"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    value="Name"
                  /> */}
                  <InputField
                    className= "peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    name="name"
                    disabled= {false}
                    onUpdate={handleUpdate}
                    value = {name}
                    isValid={validatePassRequest}
                    type="string"
                    required
                    />
                  
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>

                <div className="relative">
                  {/* <input
                    autoComplete="off"
                    id="reason"
                    name="reason"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Reason"
                  /> */}

                <InputField
                    className= "peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    name="reason"
                    disabled= {false}
                    onUpdate={handleUpdate}
                    value = ""
                    isValid={validatePassRequest}
                    type="string"
                    required
                    />
                  <label
                    htmlFor="reason"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Reason
                  </label>
                </div>
                <div className="relative">
                  {/* <input
                    autoComplete="off"
                    id="time"
                    name="time"
                    type="number"
                    min="0"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="5 minutes"
                  /> */}
                   <InputField
                    className= "peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    name="time"
                    disabled= {false}
                    onUpdate={handleUpdate}
                    value = "0"
                    isValid={validatePassRequest}
                    errorMessage = "Please choose a duration between 0 mins and 30 mins."
                    type="int"
                    required
                    />
                  <label
                    htmlFor="time"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Enter duration (in minutes)
                  </label>
                </div>
                <div className="flex justify-between">
                  <div className="relative">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                      Submit
                    </button>
                  </div>
                  <div className="relative">
                    <button className="bg-red-500 text-white rounded-md px-2 py-1">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPassForm;