import MainLayout from "@/components/layout/MainLayout";
import HappyHourBanner from "@/components/ui/HappyHourbanner";
import BreweryList from "@/components/brewery/BreweryList";
import BuenosAiresBreweries from "@/components/brewery/BuenosAiresBreweries";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col h-full">
        <HappyHourBanner />
        <div className="flex-1 flex flex-col">
          <div className="p-4 flex-1 flex flex-col">
            <h1 className="text-2xl font-bold mb-4">Todas las opciones</h1>
            <div className="mb-6">
              <BreweryList />
            </div>

            <hr className="border-gray-700 my-2" />

            <h2 className="text-2xl font-bold mt-4 mb-4">
              Opciones en Buenos Aires
            </h2>
            <div className="mb-16">
              {" "}
              {/* Espacio para evitar que el contenido quede detrás de la navegación */}
              <BuenosAiresBreweries />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
