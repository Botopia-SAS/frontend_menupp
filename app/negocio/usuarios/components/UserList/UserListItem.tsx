"use client";

import { User } from "../../types";

interface UserListItemProps {
  user: User;
  isSelected: boolean;
  onSelect: () => void;
  onRemove: () => void;
}

export default function UserListItem({
  user,
  isSelected,
  onSelect,
  onRemove,
}: UserListItemProps) {
  return (
    <div
      className={`flex justify-between items-center p-4 rounded-lg ${
        isSelected ? "bg-blue-50" : "hover:bg-gray-50"
      } cursor-pointer`}
      onClick={onSelect}
    >
      <div className="text-sm">{user.email}</div>

      <div className="flex space-x-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="px-4 py-1 text-red-500 border border-red-300 rounded-full text-sm hover:bg-red-50"
        >
          ELIMINAR
        </button>

        <button
          className="px-4 py-1 text-white bg-blue-500 rounded-full text-sm hover:bg-blue-600"
          onClick={(e) => {
            e.stopPropagation();
            // Save logic would go here
          }}
        >
          GUARDAR
        </button>
      </div>
    </div>
  );
}
