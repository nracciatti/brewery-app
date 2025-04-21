"use client";

import React, { useEffect, useState } from "react";
import BreweryCard from "./BreweryCard";
import { Brewery, getAllBreweries } from "../../services/BreweryService";
import LoadingSpinner from "../ui/LoadingSpinner";

const BreweryList: React.FC = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [loading, setLoading] = useState<boolean>(true); //estado de carga inicial: true
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { 
    const fetchBreweries = async () => {
      try {
        setLoading(true); // establecer loading a true al iniciar la carga
        const data = await getAllBreweries();
        setBreweries(data);
        setError(null);
      } catch (err) {
        setError(
          "Error al cargar las cervecerías. Por favor, intenta de nuevo más tarde."
        );
        console.error("Error fetching breweries:", err);
      } finally {
        setLoading(false); // establecer loading a false cuando termina (sea exito o error)
      }
    };

    fetchBreweries();
  }, []);

  if (loading) {
    return <LoadingSpinner />; //renderizo el loading spinner si loading es true
  }

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  if (breweries.length === 0) {
    return (
      <div className="text-gray-400 p-4">No se encontraron cervecerías.</div>
    );
  }

  return (
    <div className="overflow-x-auto -mx-4 px-4">
      <div className="flex space-x-4 py-2">
        {breweries.map((brewery) => (
          <BreweryCard key={brewery.id} brewery={brewery} />
        ))}
      </div>
    </div>
  );
};

export default BreweryList;
