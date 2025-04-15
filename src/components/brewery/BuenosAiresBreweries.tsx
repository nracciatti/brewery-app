import React from "react";
import BreweryCard from "./BreweryCard";

const BuenosAiresBreweries: React.FC = () => {
  const mockBuenosAiresBreweries = [
    {
      id: "3",
      name: "Cervecería Palermo",
      address: "Av. Santa Fe 3456, Palermo, Buenos Aires",
      phone: "4832-5678",
      imageUrl:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=240&h=240&q=80",
    },
    {
      id: "4",
      name: "Bar San Telmo",
      address: "Defensa 1234, San Telmo, Buenos Aires",
      phone: "4300-9876",
      imageUrl:
        "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=240&h=240&q=80",
    },
  ];

  return (
    <div className="overflow-x-auto -mx-4 px-4">
      <div className="flex space-x-4 py-2">
        {mockBuenosAiresBreweries.map((brewery) => (
          <BreweryCard
            key={brewery.id}
            id={brewery.id}
            name={brewery.name}
            address={brewery.address}
            phone={brewery.phone}
            imageUrl={brewery.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default BuenosAiresBreweries;
