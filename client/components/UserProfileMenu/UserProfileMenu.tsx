import Image from "next/image";
import React from "react";
import useAuth from "../../hooks/useAuth";

export const UserProfileMenu: React.FC = () => {
  const { userProfile } = useAuth();
  return userProfile?.pictureUrl ? (
    <Image
      src={userProfile.pictureUrl}
      layout="fill"
      className="rounded-full"
      alt="User profile picture"
    />
  ) : null;
};
