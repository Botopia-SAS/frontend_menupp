"use client";

import { Permission } from "../../types";
import { useState } from "react";

interface PermissionSectionProps {
  permission: Permission;
  section: string;
  onToggle: (key: string, checked: boolean, parentKey?: string) => void;
}

export default function PermissionSection({
  permission,
  section,
  onToggle,
}: PermissionSectionProps) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggle(permission.key, e.target.checked);

    // Also toggle all sub-permissions if this is a category
    if (permission.isCategory && permission.subPermissions) {
      permission.subPermissions.forEach((subPerm) => {
        onToggle(subPerm.key, e.target.checked, permission.key);
      });
    }
  };

  return (
    <div className="mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          id={`${section}-${permission.key}`}
          checked={permission.checked}
          onChange={handleToggle}
          className="mr-3 h-4 w-4"
        />
        <label htmlFor={`${section}-${permission.key}`} className="flex-grow">
          {permission.label}
        </label>

        {permission.isCategory && permission.subPermissions && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            {expanded ? "▼" : "▶"}
          </button>
        )}
      </div>

      {permission.isCategory && permission.subPermissions && expanded && (
        <div className="pl-8 pt-2 space-y-2">
          {permission.subPermissions.map((subPermission) => (
            <div key={subPermission.key} className="flex items-center">
              <input
                type="checkbox"
                id={`${section}-${permission.key}-${subPermission.key}`}
                checked={subPermission.checked}
                onChange={(e) =>
                  onToggle(subPermission.key, e.target.checked, permission.key)
                }
                className="mr-3 h-4 w-4"
              />
              <label
                htmlFor={`${section}-${permission.key}-${subPermission.key}`}
                className="text-sm"
              >
                {subPermission.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
