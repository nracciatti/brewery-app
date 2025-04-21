export interface Brewery {
  id: string;
  name: string;
  street: string | null;
  city: string;
  state_province: string;
  phone: string | null;
  imageUrl?: string;
}

const BASE_URL = "https://api.openbrewerydb.org/v1/breweries";

export async function getAllBreweries(): Promise<Brewery[]> {
  try {
    const response = await fetch(`${BASE_URL}?per_page=6`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    const breweries: Brewery[] = data.map((brewery: any) => ({
      id: brewery.id,
      name: brewery.name,
      street: brewery.street,
      city: brewery.city,
      state: brewery.state,
      phone: brewery.phone,
      imageUrl: `https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=240&h=240&q=80`,
    }));

    return breweries;
  } catch (error) {
    console.error("Error fetching breweries:", error);
    return [];
  }
}

export async function getBreweriesByCity(city: string): Promise<Brewery[]> {
  try {
    const response = await fetch(
      `${BASE_URL}?by_city=${encodeURIComponent(city)}&per_page=6`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    const breweries: Brewery[] = data.map((brewery: any, index: number) => ({
      id: brewery.id,
      name: brewery.name,
      street: brewery.street,
      city: brewery.city,
      state: brewery.state,
      phone: brewery.phone,
      imageUrl: `https://images.unsplash.com/photo-${
        1559526324 + index
      }-593bc073d938?auto=format&fit=crop&w=240&h=240&q=80`,
    }));

    return breweries;
  } catch (error) {
    console.error(`Error fetching breweries by city ${city}:`, error);
    return [];
  }
}

export async function getBreweryById(id: string): Promise<Brewery | null> {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const brewery = await response.json();

    return {
      id: brewery.id,
      name: brewery.name,
      street: brewery.street,
      city: brewery.city,
      state_province: brewery.state,
      phone: brewery.phone,
      imageUrl: `https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=240&h=240&q=80`,
    };
  } catch (error) {
    console.error(`Error fetching brewery with id ${id}:`, error);
    return null;
  }
}
