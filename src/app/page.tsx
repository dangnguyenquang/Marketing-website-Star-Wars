import { gqlClient } from "@/graphql/client";
import { GET_MOVIES } from "@/graphql/queries/movies";
import { GET_CHARACTERS } from "@/graphql/queries/charaters";
import CharacterCarousel from "@/components/CharacterCarousel";
import MovieCarousel from "@/components/MovieCarousel";
import { AllFilmsResponse } from "@/types/movies";
import { AllPeopleResponse } from "@/types/characters";
import SearchBar from "@/components/SearchBar";
import { ChevronDown } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default async function HomePage() {
  const moviesData: AllFilmsResponse = await gqlClient.request(GET_MOVIES, {
    first: 5,
  });
  const charactersData: AllPeopleResponse = await gqlClient.request(
    GET_CHARACTERS,
    { first: 8 }
  );

  return (
    <main className="min-h-screen text-white px-2 md:px-10 py-4 overflow-hidden relative">
      {/* <AnimatedBackground /> */}

      <div className="relative w-full mx-auto group max-md:mt-14">
        <img
          src="images/starwarsI_0002-Photoroom.png"
          alt=""
          className="relative z-10 w-full h-auto rounded-lg max-md:scale-150"
        />
        <div
          className="absolute inset-0 z-0 blur-3xl scale-105 rounded-lg"
          style={{
            backgroundImage: `url('images/starwarsI_0002-Photoroom.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-blue-400/20 rounded-3xl blur-3xl scale-110 group-hover:scale-115 transition-transform duration-700"></div> */}
      </div>

      <div className="relative z-10 px-6 lg:px-10 py-8">
        <div
          className={`flex justify-center mb-16 transition-all duration-1000 delay-300 opacity-100 translate-y-0`}
        >
          <SearchBar />
        </div>

        <div
          className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 delay-500 opacity-100 translate-y-0`}
        >
          <div className="text-center space-y-6 w-full">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
              Welcome to the{" "}
              <span className="bg-gradient-to-r from-[#facc15] to-orange-500 bg-clip-text text-transparent">
                Star Wars Hub
              </span>
            </h2>
            <p className="text-sm md:text-xl text-gray-300 leading-relaxed mx-auto">
              Your gateway to explore the expansive universe of Star Wars.
              Discover the epic stories, legendary characters, and iconic ships
              that have captivated fans for generations.
            </p>
            <div className="flex justify-center mt-3">
              <ChevronDown className="w-6 h-6 text-[#facc15] animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <MovieCarousel movies={moviesData.allFilms.films} />
      <div className="mt-10" />
      <CharacterCarousel characters={charactersData.allPeople.people} />

      <div className="fixed bottom-8 right-8 z-20">
        <div className="bg-black/40 backdrop-blur-xl rounded-full p-3 border border-white/10">
          <ChevronDown className="w-5 h-5 text-yellow-400 animate-bounce" />
        </div>
      </div>
    </main>
  );
}
