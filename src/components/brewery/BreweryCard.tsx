import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

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
  // Acortar la dirección si es demasiado larga
  const shortAddress =
    address.length > 25 ? `${address.substring(0, 25)}...` : address;

  return (
    <div className="bg-gray-800/70 rounded-lg shadow-lg p-4 min-w-[85vw] md:min-w-[300px] flex-shrink-0 h-[180px] flex flex-col">
      <h3 className="font-bold text-lg mb-2 truncate">{name}</h3>
      <div className="flex items-center mb-auto">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-3 flex-shrink-0">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
            quality={90}
            unoptimized
          />
        </div>
        <div className="flex-1 min-w-0 max-w-[60%]">
          <div className="flex items-center text-sm text-gray-300 mb-2">
            <MapPinIcon className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">{shortAddress}</span>
          </div>
          <div className="flex items-center text-sm text-gray-300">
            <PhoneIcon className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">{phone}</span>
          </div>
        </div>
      </div>
      <Link href={`/brewery/${id}`} className="block w-full mt-2">
        <div className="bg-gradient-primary text-center py-2 px-4 rounded-md text-white w-full">
          Ver más
        </div>
      </Link>
    </div>
  );
};

export default BreweryCard;
