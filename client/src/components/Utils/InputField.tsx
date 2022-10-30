import clsx from "clsx";
import { parse } from "path";
import React from "react";

interface InputFieldProps {
  value: string | number | undefined | null;
  name: string;
  onUpdate: (value: string | number, fieldName: string) => void;
  disabled: boolean;
  required?: boolean;
  className?: string;
  component?: React.ElementType;
  isValid?: (value: string | number) => boolean;
  type?: "string" | "int" | "float";
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  onUpdate,
  disabled,
  className,
  required,
  value = undefined,
  component: InputComponent = "input",
  isValid = () => true,
  type = "string",
}) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    let parsedValue =
      type === "float"
        ? parseFloat(value)
        : type === "int"
        ? parseInt(value)
        : value;
    if (Number.isNaN(parsedValue)) parsedValue = "";
    if (!(parsedValue === "" && required) && isValid(value))
      onUpdate(parsedValue, name);
  };

  return (
    <InputComponent
      disabled={disabled}
      className={clsx("bg-inherit caret whitespace-pre-wrap", className)}
      onChange={handleChange}
      value={value}
    />
  );
};

export default InputField;
