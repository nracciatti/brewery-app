import MainLayout from "@/components/layout/MainLayout";
import HappyHourBanner from "@/components/ui/HappyHourbanner";
import BreweryList from "@/components/brewery/BreweryList";
import BuenosAiresBreweries from "@/components/brewery/BuenosAiresBreweries";

export default function Home() {
  return (
    <MainLayout>
      <div className="pb-16">
        {" "}
        {/* Padding bottom para evitar que el contenido quede detrás de la navegación inferior */}
        <HappyHourBanner />
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Todas las opciones</h1>
          <BreweryList />

          <h2 className="text-2xl font-bold my-6">Opciones en Buenos Aires</h2>
          <BuenosAiresBreweries />
        </div>
      </div>
    </MainLayout>
  );
}
