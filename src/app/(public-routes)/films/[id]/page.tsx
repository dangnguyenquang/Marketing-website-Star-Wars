"use client";

import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  User,
  Film,
  Globe,
  Rocket,
  Car,
  Users,
  Dna,
} from "lucide-react";
import {
  Character,
  CollapsibleSectionProps,
  ExpandedSections,
  FilmData,
  FilmDetailResponse,
  Planet,
  Species,
  Starship,
  Vehicle,
} from "@/types/movies";
import { CollapsibleSection } from "./_components/CollapsibleSection";
import { formatDate } from "@/lib/formatDate";
import { gqlClient } from "@/graphql/client";

import { useParams } from "next/navigation";
import { GET_FILM_BY_ID } from "@/graphql/queries/movies";
import { decodeSwapiId } from "@/lib/decodeId";

const StarWarsFilmPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [filmData, setFilmData] = useState<FilmData>();
  const slug = params.id as string;
  const numericFilmId = decodeSwapiId(slug);

  const fetchCharacters = async (id: string) => {
    setLoading(true);
    try {
      const res = await gqlClient.request<FilmDetailResponse>(GET_FILM_BY_ID, {
        filmId: id,
      });

      setFilmData(res.film);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(numericFilmId ? numericFilmId : "");
  }, []);

  return (
    <>
      {filmData && (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-14">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"></div>
            <div className="container mx-auto px-4 py-12">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-yellow-400 text-black px-3 py-1 rounded-md font-bold">
                    EPISODE {filmData.episodeID}
                  </div>
                  <Film className="w-6 h-6 text-yellow-400" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  {filmData.title}
                </h1>

                <div className="prose prose-invert max-w-none">
                  <div className="bg-gray-800/30 rounded-lg p-6 border border-yellow-400/20">
                    <h2 className="text-xl font-semibold mb-4 text-yellow-400">
                      Opening Crawl
                    </h2>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line text-justify">
                      {filmData.openingCrawl}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-lg p-6 mb-8 border border-gray-600">
                <h2 className="text-2xl font-bold mb-6 text-yellow-400 flex items-center gap-3">
                  <Film className="w-6 h-6" />
                  Film Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-gray-400" />
                      <div>
                        <span className="text-gray-400 text-sm">Director</span>
                        <p className="text-white font-medium">
                          {filmData.director}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-gray-400" />
                      <div>
                        <span className="text-gray-400 text-sm">Producers</span>
                        <p className="text-white font-medium">
                          {filmData.producers.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <div>
                        <span className="text-gray-400 text-sm">
                          Release Date
                        </span>
                        <p className="text-white font-medium">
                          {formatDate(filmData.releaseDate)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <div>
                        <span className="text-gray-400 text-sm">
                          Last Edited
                        </span>
                        <p className="text-white font-medium">
                          {formatDate(filmData.edited)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <CollapsibleSection
                  title="Characters"
                  items={filmData.characterConnection.characters}
                  icon={Users}
                  sectionKey="characters"
                  renderItem={(character: Character) => (
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {character.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        Species: {character.species ? character.species.name : "undefined"}
                      </p>
                      <p className="text-sm text-gray-400">
                        Skin: {character.skinColor ? character.skinColor : "undefined"}
                      </p>
                    </div>
                  )}
                />

                <CollapsibleSection
                  title="Planets"
                  items={filmData.planetConnection.planets}
                  icon={Globe}
                  sectionKey="planets"
                  renderItem={(planet: Planet) => (
                    <div>
                      <h4 className="font-semibold text-white">
                        {planet.name}
                      </h4>
                    </div>
                  )}
                />

                <CollapsibleSection
                  title="Species"
                  items={filmData.speciesConnection.species}
                  icon={Dna}
                  sectionKey="species"
                  renderItem={(species: Species) => (
                    <div>
                      <h4 className="font-semibold text-white">
                        {species.name}
                      </h4>
                    </div>
                  )}
                />

                <CollapsibleSection
                  title="Starships"
                  items={filmData.starshipConnection.starships}
                  icon={Rocket}
                  sectionKey="starships"
                  renderItem={(starship: Starship) => (
                    <div>
                      <h4 className="font-semibold text-white">
                        {starship.name}
                      </h4>
                    </div>
                  )}
                />

                <CollapsibleSection
                  title="Vehicles"
                  items={filmData.vehicleConnection.vehicles}
                  icon={Car}
                  sectionKey="vehicles"
                  renderItem={(vehicle: Vehicle) => (
                    <div>
                      <h4 className="font-semibold text-white">
                        {vehicle.name}
                      </h4>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StarWarsFilmPage;
