import React from "react";
import { notFound } from "next/navigation";
import BreweryDetail from "@/components/brewery/BreweryDetail";
import MainLayout from "@/components/layout/MainLayout";
import { getBreweryById } from "@/services/BreweryService";

//funcion para obtener los datos de la api
async function getBreweryData(id: string) {
  try {
    const breweryData = await getBreweryById(id);

    if (!breweryData) {
      return null;
    }
    //adapto los datos de la api al formato que espera el componente brewerydetail
    return {
      id: breweryData.id,
      name: breweryData.name,
      address: breweryData.street
        ? `${breweryData.street}, ${breweryData.city}, ${breweryData.state_province}`
        : `${breweryData.city}, ${breweryData.state_province}`,
      phone: breweryData.phone || "No disponible",
      //simulo imagenes ya que la api no provee
      images: [
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=800&h=600&q=80",
      ],
      // simulo las reseñas ya que la api no posee
      reviews: [
        {
          id: "1",
          user: "Cris",
          avatar: "https://i.pravatar.cc/100?u=1",
          comment:
            "Me encantan este tipo de cafés! La velocidad de wifi es muy buena...",
        },
        {
          id: "2",
          user: "Dina",
          avatar: "https://i.pravatar.cc/100?u=2",
          comment:
            "Me encantan este tipo de cafés! La velocidad de wifi es muy buena...",
        },
        {
          id: "3",
          user: "Julia",
          avatar: "https://i.pravatar.cc/100?u=3",
          comment:
            "Me encantan este tipo de cafés! La velocidad de wifi es muy buena...",
        },
      ],
    };
  } catch (error) {
    console.error(`Error fetching brewery with id ${id}:`, error);

    // en caso de error simulo breweries
    const fallbackData = {
      "1": {
        id: "1",
        name: "Bar Nim",
        address: "Havre 73, Juárez, Cuauhtémoc",
        phone: "4235-8766",
        images: [
          "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&h=600&q=80",
          "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=800&h=600&q=80",
          "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=800&h=600&q=80",
        ],
        reviews: [
          {
            id: "1",
            user: "Cris",
            avatar: "https://i.pravatar.cc/100?u=1",
            comment:
              "Me encantan este tipo de cafés! La velocidad de wifi es muy buena...",
          },
          {
            id: "2",
            user: "Dina",
            avatar: "https://i.pravatar.cc/100?u=2",
            comment:
              "Me encantan este tipo de cafés! La velocidad de wifi es muy buena...",
          },
          {
            id: "3",
            user: "Julia",
            avatar: "https://i.pravatar.cc/100?u=3",
            comment:
              "Me encantan este tipo de cafés! La velocidad de wifi es muy buena...",
          },
        ],
      },
    };

    return fallbackData[id as keyof typeof fallbackData] || null;
  }
}

interface PageProps {
  params: {
    id: string;
  };
}

export default async function BreweryPage({ params }: PageProps) {
  const brewery = await getBreweryData(params.id);

  if (!brewery) {
    notFound();
  }

  return (
    <MainLayout>
      <BreweryDetail brewery={brewery} />
    </MainLayout>
  );
}
