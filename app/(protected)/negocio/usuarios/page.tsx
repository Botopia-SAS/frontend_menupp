"use client";

import UserList from "./components/UserList/UserList";
import UserDetail from "./components/UserDetail/UserDetail";
import UserForm from "./components/UserForm/UserForm";
import { useUsersManagement } from "./hooks";

export default function UsuariosPage() {
  const {
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
  } = useUsersManagement();

  return (
    <div className="mt-20">
      <div className="flex space-x-6">
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-sm">
          <UserList
            users={users}
            selectedUser={selectedUser}
            onSelectUser={setSelectedUser}
            onAddUser={() => setIsAddingUser(true)}
            onRemoveUser={removeUser}
          />
        </div>
        {selectedUser && (
          <div className="w-1/2 bg-white p-6 rounded-lg shadow-sm">
            <UserDetail
              user={selectedUser}
              permissions={permissionsData[selectedUser.email]}
              onUpdatePermission={(section, key, checked, parentKey) =>
                updateUserPermission(
                  selectedUser.email,
                  section,
                  key,
                  checked,
                  parentKey
                )
              }
              onUpdateRole={(role) => updateUserRole(selectedUser.email, role)}
            />
          </div>
        )}
      </div>

      {isAddingUser && (
        <UserForm
          onClose={() => setIsAddingUser(false)}
          onSubmit={(user) => {
            addUser(user);
            setIsAddingUser(false);
            setSelectedUser(user);
          }}
        />
      )}
    </div>
  );
}
