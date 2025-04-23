import React from "react";
import Link from "next/link";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Brewery } from "../../services/BreweryService";

interface BreweryCardProps {
  brewery: Brewery;
}

const BreweryCard: React.FC<BreweryCardProps> = ({ brewery }) => {
  // formateamos direccion completa
  const address = brewery.street
    ? `${brewery.street}, ${brewery.city}, ${brewery.state_province}`
    : `${brewery.city}, ${brewery.state_province}`;

  //si la direccion es muy larga la acortamos
  const shortAddress =
    address.length > 25 ? `${address.substring(0, 25)}...` : address;

  return (
    <div className="bg-gray-800/70 rounded-lg shadow-lg p-4 min-w-[85vw] md:min-w-[calc(33.333%-16px)] md:max-w-[calc(33.333%-16px)] md:flex-wrap flex-shrink-0 h-[180px] flex flex-col">
      <h3 className="font-bold text-lg mb-2 truncate">{brewery.name}</h3>
      <div className="flex items-center mb-auto">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-3 flex-shrink-0">
          <img
            src={brewery.imageUrl || "/placeholder.svg"}
            alt={brewery.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0 max-w-[60%]">
          <div className="flex items-center text-sm text-gray-300 mb-2">
            <MapPinIcon className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">{shortAddress}</span>
          </div>
          <div className="flex items-center text-sm text-gray-300">
            <PhoneIcon className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">{brewery.phone}</span>
          </div>
        </div>
      </div>
      <Link href={`/brewery/${brewery.id}`} className="block w-full mt-2">
        <div className="bg-gradient-primary text-center py-2 px-4 rounded-md text-white w-full">
          Ver más
        </div>
      </Link>
    </div>
  );
};

export default BreweryCard;
