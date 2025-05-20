"use client";

const integraciones = [
  {
    nombre: "Whatsapp Web",
    descripcion:
      "Integración con WhatsApp Web para pedidos. Sirve para recibir pedidos y generar respuestas automatizadas.",
    logo: "/logos/5.png",
  },
];

export default function Integraciones() {
  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-6 text-black mt-20 w-1/2">
      <div>
        <h2 className="text-xl font-semibold mb-1 flex items-center gap-2">
          📦 Integraciones
        </h2>
        <p className="text-sm text-gray-500">
          Activa integraciones con nuestros aliados para darle poderes a tu
          operación.
        </p>
      </div>

      <div className="space-y-4">
        {integraciones.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-white p-4 rounded-md border hover:shadow transition"
          >
            <div className="flex items-center gap-4">
              <img src={item.logo} alt={item.nombre} className="w-10 h-10" />
              <div>
                <h3 className="font-semibold text-base">{item.nombre}</h3>
                <p className="text-sm text-gray-500">{item.descripcion}</p>
              </div>
            </div>
            <button className="bg-indigo-400 hover:bg-indigo-500 text-white px-4 py-2 rounded-full text-sm transition">
              CONFIGURAR
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
