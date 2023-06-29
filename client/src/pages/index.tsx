import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";
import useAuth from "../hooks/useAuth";
import { FaHandshakeSlash } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { BsPersonCheckFill } from "react-icons/bs";

const Home: NextPage = () => {
  const { authStatus } = useAuth();
  const infoItems = [
    {
      title: "Secure",
      img: <FiLock size={64} />,
    },
    {
      title: "Contactless",
      img: <FaHandshakeSlash size={64} />,
    },
    {
      title: "Convenient",
      img: <BsPersonCheckFill size={64} />,
    },
  ];
  return (
    <>
      <Head>
        <title>Welcome to digipass!</title>
      </Head>
      <div className="mt-10">
        <h1 className="text-center">
          cleaner, faster, smarter:{" "}
          <span className="text-[#4f8ed8]">digipass</span> hall passes
        </h1>
        <div className="m-20 text-center">
          <a
            className="text-[#2B303B] bg-[#BBC5DC] rounded p-2 hover:bg-blue-200"
            href={`${
              authStatus.endsWith("student") ? "student" : "teacher"
            }/classrooms`}
          >
            Go To Classrooms
          </a>
          <div className="flex flex-row gap-10 my-10">
            {infoItems.map((items, key) => (
              <div
                className="w-full rounded-lg shadow-md lg:max-w-sm bg-[#4f8ed8] flex flex-col items-center p-5"
                key={key}
              >
                {items.img}
                <h4 className="text-xl font-semibold text-blue-200">
                  {items.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h5 className="text-center">Created by: Mena Filfil!</h5>
    </>
  );
};

export default Home;
