"use client";

import { User, UserPermissions } from "../../types";
import PermissionSection from "./PermissionSection";
import RoleSelector from "../UserForm/RoleSelector";

interface UserDetailProps {
  user: User;
  permissions: UserPermissions["permissions"];
  onUpdatePermission: (
    section: string,
    key: string,
    checked: boolean,
    parentKey?: string
  ) => void;
  onUpdateRole: (role: User["role"]) => void;
}

export default function UserDetail({
  user,
  permissions,
  onUpdatePermission,
  onUpdateRole,
}: UserDetailProps) {
  if (!permissions) return null;

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-semibold mb-1">Permisos</h2>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>

      <div className="mb-6">
        <RoleSelector value={user.role} onChange={onUpdateRole} />
      </div>

      {/* Marca permissions */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="font-medium">Marca</span>
        </div>

        <div className="space-y-3 pl-7">
          {permissions.marca.map((permission) => (
            <div key={permission.key} className="flex items-center">
              <input
                type="checkbox"
                id={`marca-${permission.key}`}
                checked={permission.checked}
                onChange={(e) =>
                  onUpdatePermission("marca", permission.key, e.target.checked)
                }
                className="mr-3 h-4 w-4"
              />
              <label htmlFor={`marca-${permission.key}`}>
                {permission.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Sedes permissions */}
      {Object.entries(permissions.sedes).map(([sedeKey, sede]) => (
        <div key={sedeKey} className="mb-6">
          <div className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span className="font-medium">{sede.name}</span>
          </div>

          <div className="space-y-2 pl-7">
            {sede.permissions.map((permission) => (
              <PermissionSection
                key={permission.key}
                permission={permission}
                section={sedeKey}
                onToggle={(key, checked, parentKey) =>
                  onUpdatePermission(sedeKey, key, checked, parentKey)
                }
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
