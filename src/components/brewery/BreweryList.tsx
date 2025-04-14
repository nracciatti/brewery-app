import React from "react";
import BreweryCard from "./BreweryCard";

// ejemplo de muestra mientras no tenemos la API integrada
const mockBreweries = [
  {
    id: "1",
    name: "Bar Nim",
    address: "Havre 73, Juárez, Cuauhtémoc",
    phone: "4235-8766",
    imageUrl: "/images/brewery1.jpg",
  },
  {
    id: "2",
    name: "Hoppy Place",
    address: "Reforma 222, Juárez, Cuauhtémoc",
    phone: "5512-3456",
    imageUrl: "/images/brewery2.jpg",
  },
];

const BreweryList: React.FC = () => {
  return (
    <div className="space-y-4">
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
  );
};

export default BreweryList;
