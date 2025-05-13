"use client";

import { useState } from "react";
import { User, UserPermissions } from "./types";

// Custom hook para manejar el estado de los usuarios
export const useUsersManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isAddingUser, setIsAddingUser] = useState(false);

  // Datos de ejemplo para los permisos
  const [permissionsData, setPermissionsData] = useState<{
    [email: string]: UserPermissions["permissions"];
  }>({});

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
    // Initialize default permissions for new user
    setPermissionsData((prev) => ({
      ...prev,
      [user.email]: {
        marca: [
          {
            section: "marca",
            key: "analitica",
            label: "Analítica",
            checked: false,
          },
          {
            section: "marca",
            key: "clientes",
            label: "Clientes",
            checked: false,
          },
          {
            section: "marca",
            key: "homepage",
            label: "Homepage",
            checked: false,
          },
        ],
        sedes: {
          bogota: {
            name: "Bogotá",
            permissions: [
              {
                section: "bogota",
                key: "menus",
                label: "Menús",
                checked: false,
                isCategory: true,
                subPermissions: [
                  {
                    section: "bogota",
                    key: "menus_admin",
                    label:
                      "Agregar o administrar menús (apagar, duplicar, eliminar, etc...)",
                    checked: false,
                  },
                  {
                    section: "bogota",
                    key: "menus_items_add",
                    label:
                      "Agregar o eliminar items (categorías, productos y adiciones)",
                    checked: false,
                  },
                  {
                    section: "bogota",
                    key: "menus_items_edit",
                    label:
                      "Editar y actualizar items (precios, títulos, descripciones, etc..)",
                    checked: false,
                  },
                  {
                    section: "bogota",
                    key: "menus_items_hide",
                    label:
                      "Esconder y agotar items (categorías, productos y adiciones)",
                    checked: false,
                  },
                ],
              },
              {
                section: "bogota",
                key: "reservas",
                label: "Reservas",
                checked: false,
              },
              {
                section: "bogota",
                key: "pedidos",
                label: "Pedidos",
                checked: false,
              },
              {
                section: "bogota",
                key: "anuncios",
                label: "Anuncios",
                checked: false,
              },
            ],
          },
        },
      },
    }));
  };

  const removeUser = (email: string) => {
    setUsers((prev) => prev.filter((user) => user.email !== email));
    // Remove permissions data
    setPermissionsData((prev) => {
      const newData = { ...prev };
      delete newData[email];
      return newData;
    });

    if (selectedUser?.email === email) {
      setSelectedUser(null);
    }
  };

  const updateUserPermission = (
    email: string,
    section: string,
    key: string,
    checked: boolean,
    parentKey?: string
  ) => {
    setPermissionsData((prev) => {
      const newData = { ...prev };

      if (section === "marca") {
        const permissionIndex = newData[email].marca.findIndex(
          (p) => p.key === key
        );
        if (permissionIndex !== -1) {
          newData[email].marca[permissionIndex].checked = checked;
        }
      } else {
        // Handle sede permissions including nested permissions
        const sede = Object.keys(newData[email].sedes).find(
          (s) => s === section
        );
        if (sede) {
          if (parentKey) {
            // This is a sub-permission
            const parentPermission = newData[email].sedes[
              sede
            ].permissions.find((p) => p.key === parentKey);
            if (parentPermission && parentPermission.subPermissions) {
              const subPermIndex = parentPermission.subPermissions.findIndex(
                (p) => p.key === key
              );
              if (subPermIndex !== -1) {
                parentPermission.subPermissions[subPermIndex].checked = checked;
              }
            }
          } else {
            // Regular permission
            const permissionIndex = newData[email].sedes[
              sede
            ].permissions.findIndex((p) => p.key === key);
            if (permissionIndex !== -1) {
              newData[email].sedes[sede].permissions[permissionIndex].checked =
                checked;
            }
          }
        }
      }

      return newData;
    });
  };

  const updateUserRole = (email: string, role: User["role"]) => {
    setUsers((prev) =>
      prev.map((user) => (user.email === email ? { ...user, role } : user))
    );

    if (selectedUser?.email === email) {
      setSelectedUser((prev) => (prev ? { ...prev, role } : null));
    }
  };

  return {
    users,
    selectedUser,
    setSelectedUser,
    isAddingUser,
    setIsAddingUser,
    addUser,
    removeUser,
    updateUserPermission,
    updateUserRole,
    permissionsData,
  };
};
