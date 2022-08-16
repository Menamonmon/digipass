import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useOutsideClick } from "../hooks/useOutsideClick";

interface EditableProps {
  name: string;
  onUpdate: (value: string | number, fieldName: string) => void;
  children: string;
  disabled: boolean;
  required?: boolean;
  className?: string;
}

export const Editable: React.FC<EditableProps> = ({
  children,
  name,
  onUpdate,
  disabled,
  className,
  required,
}) => {
  const [inFocus, setInFocus] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const isValid = () => {
    return required ? value !== "" : true;
  };

  const handleOutsideClick = () => {
    setInFocus(false);
  };

  const handleInsideClick = () => {
    setInFocus(true);
  };

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    if (isValid()) {
      onUpdate(value, name);
      setInFocus(false);
    } else {
      toast("Field required", { type: "error" });
    }
    return false;
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useOutsideClick(inputRef, handleOutsideClick);

  useEffect(() => {
    if (inFocus) {
      setValue(children);
    }
  }, [inFocus]);

  useEffect(() => {
    setValue(children);
  }, [children]);

  return inFocus ? (
    <form onSubmit={handleSubmit} className={clsx("flex", className)}>
      <input
        disabled={disabled}
        ref={inputRef}
        className={clsx(className, "bg-inherit caret")}
        value={value}
        onChange={handleChange}
        autoFocus
      />
    </form>
  ) : (
    <div onClick={handleInsideClick} className={className}>
      {children}
    </div>
  );
};
