import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

//especifico props 
interface BreweryCardProps {
  id: string;
  name: string;
  address: string;
  phone: string;
  imageUrl: string;
}

const BreweryCard: React.FC<BreweryCardProps> = ({
  id,
  name,
  address,
  phone,
  imageUrl,
}) => {
  return (
    <div className="bg-dark-blue rounded-lg overflow-hidden shadow-lg mb-4">
      <div className="flex">
        <div className="w-1/3">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            width={120}
            height={120}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/3 p-4">
          <h3 className="font-bold text-lg mb-2">{name}</h3>
          <div className="flex items-center text-sm text-gray-300 mb-2">
            <MapPinIcon className="h-4 w-4 mr-1" />
            <span>{address}</span>
          </div>
          <div className="flex items-center text-sm text-gray-300">
            <PhoneIcon className="h-4 w-4 mr-1" />
            <span>{phone}</span>
          </div>
          <Link href={`/brewery/${id}`}>
            <div className="mt-3 bg-gradient-primary text-center py-2 px-4 rounded-md text-white">
              Ver más
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BreweryCard;
