import React from "react";
import BreweryCard from "./BreweryCard";

//ejemplo muestra mientras no tenemos la API integrada
const mockBuenosAiresBreweries = [
  {
    id: "3",
    name: "Cervecería Palermo",
    address: "Av. Santa Fe 3456, Palermo, Buenos Aires",
    phone: "4832-5678",
    imageUrl: "https://source.unsplash.com/random/120x120/?brewery,buenosaires",
  },
  {
    id: "4",
    name: "Bar San Telmo",
    address: "Defensa 1234, San Telmo, Buenos Aires",
    phone: "4300-9876",
    imageUrl: "https://source.unsplash.com/random/120x120/?bar,argentina",
  },
];

const BuenosAiresBreweries: React.FC = () => {
  return (
    <div className="space-y-4">
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
  );
};

export default BuenosAiresBreweries;
