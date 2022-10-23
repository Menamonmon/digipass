import React, { useCallback } from "react";
import { MdContentCopy } from "react-icons/md";
import { toast } from "react-toastify";

interface SwitchProps {
  value: boolean;
  activeIcon: React.ReactElement;
  inactiveIcon: React.ReactElement;
  switchCallback: () => void;
}

const Switch: React.FC<SwitchProps> = ({
  value,
  activeIcon,
  inactiveIcon,
  switchCallback,
}) => {
  return (
    <button
      className="flex items-center text-xl btn btn-circle btn-sm"
      onClick={switchCallback}
    >
      {value ? activeIcon : inactiveIcon}
    </button>
  );
};

export default Switch;
