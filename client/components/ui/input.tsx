"use client";

import { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-red-500"
    />
  );
}
