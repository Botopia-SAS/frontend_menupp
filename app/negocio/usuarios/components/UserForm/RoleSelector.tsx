"use client";

import { useState } from "react";
import { User } from "../../types";

interface RoleSelectorProps {
  value: User["role"];
  onChange: (role: User["role"]) => void;
}

export default function RoleSelector({ value, onChange }: RoleSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const roles: User["role"][] = ["Administrador", "Usuario"];

  return (
    <div className="relative">
      <button
        type="button"
        className="relative w-full bg-white border rounded-lg pl-3 pr-10 py-2 text-left flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        {value}
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1">
          {roles.map((role) => (
            <div
              key={role}
              className={`
                ${value === role ? "bg-gray-100" : ""}
                flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer
              `}
              onClick={() => {
                onChange(role);
                setIsOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {role === "Administrador" ? (
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a1 1 0 10-2 0 8 8 0 0016 0 1 1 0 10-2 0 5.986 5.986 0 00-.454-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
              {role}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
