"use client";

import SedesList from "./components/SedesList";

export default function SedesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Sedes</h1>
      <div className="max-w-2xl pl-0 pr-4 space-y-6">
        <SedesList />
      </div>
    </div>
  );
}
