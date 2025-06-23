import { useState } from "react";
import Eye from "./icons/Eye";
import EyeSlash from "./icons/EyeSlash";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  name: string;
  label: string;
}

export default function FormInput({
  className,
  type,
  errorMessage,
  name,
  placeholder,
  label,
}: FormInputProps) {
  const [isPasswordVisible, setIsPaswordVisible] = useState(false);
  return (
    <div className="flex flex-col space-y-0.5">
      <label htmlFor={name}>{label}</label>
      <div className="flex items-center space-x-0.5">
        <input
          type={
            type !== "password" ? type : isPasswordVisible ? "text" : "password"
          }
          id={name}
          placeholder={placeholder}
          className={`border-2 p-2 rounded ${className}`}
        />
        {type === "password" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsPaswordVisible(!isPasswordVisible);
            }}
            className="hover:cursor-pointer"
          >
            {isPasswordVisible ? (
              <Eye className="size-8" />
            ) : (
              <EyeSlash className="size-8" />
            )}
          </button>
        ) : null}
      </div>
      <span className="text-sm text-red-500">{errorMessage}</span>
    </div>
  );
}
