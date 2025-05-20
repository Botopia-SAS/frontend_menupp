// Define los tipos de datos que se usarán en los componentes

export interface User {
  email: string;
  role: "Administrador" | "Usuario";
}

export interface Permission {
  section: string;
  key: string;
  label: string;
  checked: boolean;
  isCategory?: boolean;
  subPermissions?: Permission[];
}

export interface UserPermissions {
  user: User;
  permissions: {
    marca: Permission[];
    sedes: {
      [sedeKey: string]: {
        name: string;
        permissions: Permission[];
      };
    };
  };
}
