"use client";

import React, { useState } from "react";

type PaginaProps = {
  sedeId: string;
};

const Pagina: React.FC<PaginaProps> = ({ sedeId }) => {
  const [url, setUrl] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    // Aquí puedes disparar lógica adicional como guardar en estado global o enviar a backend
  };

  return (
    <section className="bg-white rounded-lg shadow p-6 text-black">
      <label htmlFor="paginaDomicilios" className="block font-semibold mb-2">
        Página de domicilios
      </label>
      <input
        type="url"
        id="paginaDomicilios"
        value={url}
        onChange={handleChange}
        placeholder="https://..."
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </section>
  );
};

export default Pagina;
