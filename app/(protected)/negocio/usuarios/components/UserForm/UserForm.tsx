"use client";

import { useState } from "react";
import { User } from "../../types";

interface UserFormProps {
  onClose: () => void;
  onSubmit: (user: User) => void;
}

export default function UserForm({ onSubmit }: UserFormProps) {
  const [email, setEmail] = useState("");
  const [role] = useState<User["role"]>("Usuario");

  const handleSubmit = () => {
    if (email.trim()) {
      onSubmit({ email, role });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Nuevo usuario</h2>

        <div className="mb-6">
          <label className="block text-sm mb-2">Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingrese el correo electrónico"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200 uppercase"
        >
          SIGUIENTE
        </button>
      </div>
    </div>
  );
}
