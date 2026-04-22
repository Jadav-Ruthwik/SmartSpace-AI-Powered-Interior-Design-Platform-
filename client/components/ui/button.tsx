"use client";

import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`px-5 py-2 rounded-lg font-medium transition ${
        variant === "primary"
          ? "bg-red-600 text-white hover:bg-red-700"
          : "border border-gray-300 hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}
