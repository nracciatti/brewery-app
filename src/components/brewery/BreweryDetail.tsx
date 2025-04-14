"use client"; //indico a next que es un componente del lado del cliente para usar hooks de react

import React, { useState } from "react"; //importo react y hook useState
import Image from "next/image";
import {
  MapPinIcon,
  PhoneIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

interface Review {
  id: string;
  user: string;
  avatar: string;
  comment: string;
}

interface BreweryDetailProps {
  brewery: {
    id: string;
    name: string;
    address: string;
    phone: string;
    images: string[];
    reviews: Review[];
  };
}

const BreweryDetail: React.FC<BreweryDetailProps> = ({ brewery }) => {
  const router = useRouter(); //hook router de next para manejar navegacion programaticamente
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goBack = () => {
    router.back();
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % brewery.images.length); //con el operador % me aseguro de que el index vuelva al principio cuando llega el final del array
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + brewery.images.length) % brewery.images.length
    );
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-dark-blue p-4 flex items-center">
        <button onClick={goBack} className="mr-4">
          <ArrowLeftIcon className="h-6 w-6 text-white" />
        </button>
        <h1 className="text-2xl font-bold">{brewery.name}</h1>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <div className="flex items-center text-gray-300">
          <MapPinIcon className="h-5 w-5 mr-2" />
          <span>{brewery.address}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <PhoneIcon className="h-5 w-5 mr-2" />
          <span>{brewery.phone}</span>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative h-64 w-full">
        <Image
          src={brewery.images[currentImageIndex] || "/placeholder.svg"}
          alt={`${brewery.name} - Imagen ${currentImageIndex + 1}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex justify-between items-center">
          <button
            onClick={prevImage}
            className="bg-black/30 text-white p-2 rounded-full ml-2"
          >
            &lt;
          </button>
          <button
            onClick={nextImage}
            className="bg-black/30 text-white p-2 rounded-full mr-2"
          >
            &gt;
          </button>
        </div>
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
          {brewery.images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentImageIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Opiniones</h2>
        <div className="space-y-4">
          {brewery.reviews.map((review) => (
            <div key={review.id} className="flex space-x-3">
              <Image
                src={review.avatar || "/placeholder.svg"}
                alt={review.user}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">{review.user}</h3>
                  <button className="text-purple">Responder</button>
                </div>
                <p className="text-gray-300 text-sm">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 space-y-3">
        <button className="w-full py-3 bg-gradient-primary rounded-md font-medium">
          Reservar mesa
        </button>
        <button className="w-full py-3 border border-gray-700 rounded-md font-medium">
          Opciones de transporte
        </button>
      </div>
    </div>
  );
};

export default BreweryDetail;
