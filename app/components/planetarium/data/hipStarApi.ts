import { Star } from "./Star";

interface HipStarApiEntry {
  id: number;
  name: string;
  mag: number;
  ra: number;
  de: number;
}

interface HipStarApiResponse {
  info: {
    source: string;
    timestamp: number;
  };
  hipstars: HipStarApiEntry[];
}

export async function fetchHipStars(
  url: string,
): Promise<Star[]> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to load stars: ${res.status}`);
  }

  const data: HipStarApiResponse = await res.json();

  return data.hipstars
    .map(s => ({
      ra: s.ra,
      dec: s.de,
      magnitude: s.mag,
      label: s.name,
    }));
}
