import { useState } from "react";
import Eye from "./icons/Eye";
import EyeSlash from "./icons/EyeSlash";
import useDarkModeStore from "../hooks/zustand/useIsDarkStore";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  fieldName: string;
  label: string;
}

export default function FormInput({
  className,
  type,
  errorMessage,
  fieldName,
  placeholder,
  label,
  ...rest
}: FormInputProps) {
  const [isPasswordVisible, setIsPaswordVisible] = useState(false);
  const isDark = useDarkModeStore((state) => state.isDark);
  return (
    <div className="flex flex-col space-y-0.5">
      <label
        htmlFor={fieldName}
        className={`${isDark ? "text-neutral-100" : "text-neutral-900"}`}
      >
        {label}
      </label>
      <div className="flex items-center space-x-0.5">
        <input
          type={
            type !== "password" ? type : isPasswordVisible ? "text" : "password"
          }
          id={fieldName}
          placeholder={placeholder}
          className={`border-2 p-2 rounded ${
            isDark ? "bg-neutral-100" : ""
          } ${className}`}
          {...rest}
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
              <Eye
                className={`size-8 ${
                  isDark ? "text-neutral-100" : "text-neutral-900"
                }`}
              />
            ) : (
              <EyeSlash
                className={`size-8 ${
                  isDark ? "text-neutral-100" : "text-neutral-900"
                }`}
              />
            )}
          </button>
        ) : null}
      </div>
      <span className="text-sm text-red-500">{errorMessage}</span>
    </div>
  );
}
