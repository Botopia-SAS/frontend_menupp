import HomepageBuilder from "@/components/Homepage/HomepageBuilder";
import MobilePreview from "@/components/Menus/MobilePreview";

export default function HomepagePage() {
  return (
    // 1️⃣  Flex column en mobile → fila en desktop
    <main className="mt-20 px-6 flex flex-col lg:flex-row gap-8">
      {/* Columna izquierda ─────────────────────────────── */}
      <div className="lg:w-1/2">
        <HomepageBuilder />
      </div>

      {/* Columna derecha ──────────────────────────────── */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        {/* ⏫  sticky = se “pega” mientras haya espacio */}
        <div className="sticky top-28">
          <MobilePreview widthClass="w-80 md:w-96 lg:w-[28rem]" />
        </div>
      </div>
    </main>
  );
}
