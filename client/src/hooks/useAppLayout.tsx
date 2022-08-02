import { useRouter } from "next/router";
import { Fragment } from "react";
import { TeacherLayout, StudentLayout } from "../components/Layout";

export const useAppLayout = () => {
  const router = useRouter();
  const routeType = router.asPath.startsWith("/student")
    ? "student"
    : router.asPath.startsWith(" /teacher")
    ? "teacher"
    : "general";
  const AppLayout =
    routeType === "general"
      ? Fragment
      : routeType === "student"
      ? StudentLayout
      : TeacherLayout;
  return AppLayout;
};
