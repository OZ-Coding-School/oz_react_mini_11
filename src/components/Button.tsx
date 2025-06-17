import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "default" | "outline";
}

export default function Button({
  children,
  theme = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded px-3 py-2 hover:cursor-pointer 
        ${theme === "default" ? "text-neutral-50 bg-violet-700 " : ""}
        ${theme === "outline" ? "text-violet-700 border-2 bg-neutral-50 " : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
