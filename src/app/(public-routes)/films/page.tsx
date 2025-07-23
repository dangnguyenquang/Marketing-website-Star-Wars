"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { gqlClient } from "@/graphql/client";
import { FILMS_QUERY } from "@/graphql/queries/movies";
import { AllFilmsResponse, Film } from "@/types/movies";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";

const BACKGOURND_IMAGES = [
  "6c11073a34d09cd2f509c7e41976365e.jpg",
  "06ca83336cee66b908ef58c3f156bd10.jpg",
  "842893f66587678d03402fafe3ebf40a.jpg",
  "ddf25716f7e5c6ee0c5d8945bfa18424.jpg",
];
import { useRouter, useSearchParams } from "next/navigation";
import { PATH_NAME } from "@/configs/pathName";

export default function FilmsList() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(search || "");
  const [sort, setSort] = useState("title");

  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gqlClient
      .request<AllFilmsResponse>(FILMS_QUERY)
      .then((res) => {
        setFilms(res.allFilms.films);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching films:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="min-h-screen">Loading...</div>;

  const filtered = films
    .filter((film) => film.title.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (sort === "date") {
        return (
          new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
        );
      } else {
        return a.title.localeCompare(b.title);
      }
    });

  const itemsPerPage = 4;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleNavigate = (id: string) => {
    router.push(`${PATH_NAME.MOVIE_LIST}/${id}`);
  };

  return (
    <div className="text-white space-y-4 my-12 min-h-screen py-14 px-10">
      <div className="flex gap-4 items-center mb-4">
        <Input
          placeholder="Search film..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-[200px]"
        />
        <Select onValueChange={setSort} value={sort}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="title">Title</SelectItem>
            <SelectItem value="date">Release Date</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-8 text-lg">
            No results found.
          </p>
        ) : (
          paginated.map((film, index) => (
            <Card
              key={film.id}
              className="cursor-pointer group py-2 backdrop-blur-sm bg-white/10 border-[#facc15] hover:drop-shadow-[0_0_10px_rgba(217,255,54,0.5)] text-white duration-300 bg-center bg-no-repeat overflow-hidden"
              style={{
                backgroundImage: `url('/images/${BACKGOURND_IMAGES[index]}')`,
                backgroundSize: "100%",
                transition: "background-size 0.5s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundSize = "110%";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundSize = "100%";
              }}
              onClick={() => handleNavigate(film.id)}
            >
              <CardContent className="p-4 text-gray-200">
                <h3 className="text-xl font-bold text-[#facc15] mb-3">
                  {film.title}
                </h3>
                <p>Director: {film.director}</p>
                <p>Release: {film.releaseDate}</p>
                <p>Producers: {film.producers.join(", ")}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <Pagination className="pt-4 mt-14">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage((p) => p - 1)}
              className={page === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>

          {[...Array(totalPages)].map((_, i) => {
            const pageNumber = i + 1;
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  isActive={page === pageNumber}
                  onClick={() => setPage(pageNumber)}
                  href="#"
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              onClick={() => setPage((p) => p + 1)}
              className={
                page === totalPages ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
