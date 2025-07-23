export interface Film {
  id: string;
  title: string;
  releaseDate: string;
  director: string;
  openingCrawl: string;
  producers: string[];
}

export interface AllFilmsResponse {
  allFilms: {
    films: Film[];
  };
}

export interface Species {
  name: string;
}

export interface Character {
  name: string;
  skinColor: string;
  species: Species;
}

export interface Planet {
  name: string;
}

export interface Starship {
  name: string;
}

export interface Vehicle {
  name: string;
}

export interface FilmData {
  title: string;
  episodeID: number;
  director: string;
  producers: string[];
  releaseDate: string;
  edited: string;
  openingCrawl: string;
  characterConnection: {
    characters: Character[];
  };
  planetConnection: {
    planets: Planet[];
  };
  speciesConnection: {
    species: Species[];
  };
  starshipConnection: {
    starships: Starship[];
  };
  vehicleConnection: {
    vehicles: Vehicle[];
  };
}

export interface FilmDetailResponse {
  film: FilmData
}

export interface ExpandedSections {
  characters: boolean;
  planets: boolean;
  species: boolean;
  starships: boolean;
  vehicles: boolean;
}

export interface CollapsibleSectionProps<T> {
  title: string;
  items: T[];
  icon: React.ComponentType<{ className?: string }>;
  sectionKey: keyof ExpandedSections;
  renderItem: (item: T) => React.ReactNode;
}
