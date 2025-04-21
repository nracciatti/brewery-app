"use client";

import React, { useEffect, useState } from "react";
import BreweryCard from "./BreweryCard";
import { Brewery, getBreweriesByCity } from "../../services/BreweryService";
import LoadingSpinner from "../ui/LoadingSpinner";

// Array de imágenes confiables
const RELIABLE_IMAGES = [
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=240&h=240&q=80",
  "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=240&h=240&q=80",
  "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=240&h=240&q=80",
  "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=240&h=240&q=80",
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=240&h=240&q=80",
];

const CaliforniaBreweries: React.FC = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        setLoading(true);
        const data = await getBreweriesByCity("San Diego");

        // si no encuentra nada para california, muestro :
        if (data.length === 0) {
          setBreweries([
            {
              id: "3",
              name: "Cervecería Tateti",
              street: "Av. Santa Fe 3456",
              city: "Palermo",
              state_province: "California",
              phone: "4832-5678",
              imageUrl: RELIABLE_IMAGES[0],
            },
            {
              id: "4",
              name: "Bar La Californiana",
              street: "Defensa 1234",
              city: "Miami",
              state_province: "California",
              phone: "4300-9876",
              imageUrl: RELIABLE_IMAGES[1],
            },
          ]);
        } else {
          // IMPORTANTE: Reemplazar TODAS las URLs de imágenes con nuestras URLs confiables
          const breweriesWithFixedImages = data.map((brewery, index) => ({
            ...brewery,
            imageUrl: RELIABLE_IMAGES[index % RELIABLE_IMAGES.length],
          }));

          setBreweries(breweriesWithFixedImages);
        }

        setError(null);
      } catch (err) {
        setError(
          "Error al cargar las cervecerías. Por favor, intenta de nuevo más tarde."
        );
        console.error("Error fetching breweries:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBreweries();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  if (breweries.length === 0) {
    return (
      <div className="text-gray-400 p-4">
        No se encontraron cervecerías en California.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto md:overflow-visible -mx-4 px-4">
      <div className="flex md:flex-wrap md:gap-4 space-x-4 md:space-x-0 py-2">
        {breweries.map((brewery) => (
          <BreweryCard key={brewery.id} brewery={brewery} />
        ))}
      </div>
    </div>
  );
};

export default CaliforniaBreweries;
