import Image from "next/image";
import React from "react";
import useAuth from "../../hooks/useAuth";
import LogoutButton from "../Auth/LogoutButton";

export const UserProfileMenu: React.FC = () => {
  const { userProfile } = useAuth();
  return (
    <div className="flex flex-col justify-between">
      {userProfile?.pictureUrl && (
        <Image
          src={userProfile.pictureUrl}
          width={50}
          height={50}
          className="rounded-full"
          alt="User profile picture"
        />
      )}
      <LogoutButton />
    </div>
  );
};
