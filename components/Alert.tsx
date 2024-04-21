import React from "react";

export function Alert({ show, message, type }: { show: boolean, message: string, type: string }) { 
  // Accepts config directly as props
  if (!show) return null; // Don't render if not visible

  return (
    <div
      role="alert"
      className={`alert alert-${type} absolute max-w-fit right-4 
                transition duration-250 ease-in-out -bottom-20 
                ${show ? "-translate-y-24 opacity-1" : "translate-y-0 opacity-0"}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{message}</span>
    </div>
  );
}
