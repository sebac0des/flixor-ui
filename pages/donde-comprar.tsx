// Components
import Banner from "@/components/ui/banner";
import Header from "@/components/header";
import Topbar from "@/components/topbar";

// Sections
import SearchResellers from "@/sections/search-resellers";

// Service locations
import { getResellersByLocation } from "@/services/resellers";

export default async function Page() {
  return (
    <main className="min-h-screen ">
      <Navigation />
      <Banner
        backgroundImage="bg-[url('/images/reseller-banner-image.webp')]"
        height="medium"
      />
      <SearchResellers SearchResellersByLocation={getResellersByLocation} />
    </main>
  );
}

function Navigation() {
  return (
    <div className="sticky top-0 z-50">
      <Topbar
        message="⚠️ Todavía estamos cargando revendedores..."
        className="bg-black text-white"
      />
      <Header buttonText="Volver al inicio" buttonUrl="/" />
    </div>
  );
}
