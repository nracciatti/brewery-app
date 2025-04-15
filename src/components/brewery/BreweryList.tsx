import React from "react";
import BreweryCard from "./BreweryCard";

const BreweryList: React.FC = () => {
  const mockBreweries = [
    {
      id: "1",
      name: "Bar Nim",
      address: "Havre 73, Juárez, Cuauhtémoc",
      phone: "4235-8766",
      imageUrl:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=240&h=240&q=80",
    },
    {
      id: "2",
      name: "Hoppy Place",
      address: "Reforma 222, Juárez, Cuauhtémoc",
      phone: "5512-3456",
      imageUrl:
        "https://images.unsplash.com/photo-1546622891-02c72c1537b6?auto=format&fit=crop&w=240&h=240&q=80",
    },
    // Puedes añadir más cervecerías si lo deseas
  ];

  return (
    <div className="overflow-x-auto -mx-4 px-4">
      <div className="flex space-x-4 pb-4">
        {mockBreweries.map((brewery) => (
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

export default BreweryList;
