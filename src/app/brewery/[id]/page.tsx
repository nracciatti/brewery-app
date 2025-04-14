import React from "react";
import { notFound } from "next/navigation";
import BreweryDetail from "@/components/brewery/BreweryDetail";
import MainLayout from "@/components/layout/MainLayout";

// En un caso real, esta función obtendría los datos de la API
async function getBreweryData(id: string) {
  // Simulamos datos de ejemplo
  const breweries = {
    "1": {
      id: "1",
      name: "Bar Nim",
      address: "Havre 73, Juárez, Cuauhtémoc",
      phone: "4235-8766",
      images: [
        "https://source.unsplash.com/random/400x300/?bar,interior",
        "https://source.unsplash.com/random/400x300/?brewery,beer",
        "https://source.unsplash.com/random/400x300/?pub,drinks",
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
    "2": {
      id: "2",
      name: "Hoppy Place",
      address: "Reforma 222, Juárez, Cuauhtémoc",
      phone: "5512-3456",
      images: [
        "https://source.unsplash.com/random/400x300/?craft,beer",
        "https://source.unsplash.com/random/400x300/?bar,night",
        "https://source.unsplash.com/random/400x300/?pub,food",
      ],
      reviews: [
        {
          id: "4",
          user: "Rubén",
          avatar: "https://i.pravatar.cc/100?u=4",
          comment:
            "Me encantan este tipo de cafés! La velocidad de wifi es muy buena...",
        },
        {
          id: "5",
          user: "Bruno",
          avatar: "https://i.pravatar.cc/100?u=5",
          comment:
            "Me encantan este tipo de cafés! La velocidad de wifi es muy buena...",
        },
      ],
    },
    // Añadimos datos para las cervecerías de Buenos Aires
    "3": {
      id: "3",
      name: "Cervecería Palermo",
      address: "Av. Santa Fe 3456, Palermo, Buenos Aires",
      phone: "4832-5678",
      images: [
        "https://source.unsplash.com/random/400x300/?brewery,argentina",
        "https://source.unsplash.com/random/400x300/?bar,buenosaires",
        "https://source.unsplash.com/random/400x300/?pub,argentina",
      ],
      reviews: [
        {
          id: "6",
          user: "Martín",
          avatar: "https://i.pravatar.cc/100?u=6",
          comment:
            "Me encantan este tipo de cafés! La velocidad de wifi es muy buena...",
        },
        {
          id: "7",
          user: "Laura",
          avatar: "https://i.pravatar.cc/100?u=7",
          comment:
            "Me encantan este tipo de cafés! La velocidad de wifi es muy buena...",
        },
      ],
    },
    "4": {
      id: "4",
      name: "Bar San Telmo",
      address: "Defensa 1234, San Telmo, Buenos Aires",
      phone: "4300-9876",
      images: [
        "https://source.unsplash.com/random/400x300/?santelmo,bar",
        "https://source.unsplash.com/random/400x300/?argentina,pub",
        "https://source.unsplash.com/random/400x300/?buenosaires,drinks",
      ],
      reviews: [
        {
          id: "8",
          user: "Carlos",
          avatar: "https://i.pravatar.cc/100?u=8",
          comment:
            "Me encantan este tipo de cafés! La velocidad de wifi es muy buena...",
        },
        {
          id: "9",
          user: "Ana",
          avatar: "https://i.pravatar.cc/100?u=9",
          comment:
            "Me encantan este tipo de cafés! La velocidad de wifi es muy buena...",
        },
      ],
    },
  };

  return breweries[id as keyof typeof breweries] || null;
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
