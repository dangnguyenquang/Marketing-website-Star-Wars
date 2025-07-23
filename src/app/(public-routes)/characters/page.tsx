"use client";

import { useEffect, useState } from "react";
import { gqlClient } from "@/graphql/client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";
import { GET_PEOPLE } from "@/graphql/queries/charaters";
import { AllPeopleResponse } from "@/types/characters";
import { getPaginationItems } from "@/lib/getPaginationItems";
import Loading from "@/components/Loading";
import { Skeleton } from "@/components/ui/skeleton";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

type Character = {
  id: string;
  name: string;
  gender: string;
  birthYear: string;
};

const ITEMS_PER_PAGE = 20;

export default function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [cursors, setCursors] = useState<string[]>([]);

  const fetchCharacters = async (
    page: number,
    limit: number,
    cursors: string[] = []
  ) => {
    const after = page > 1 ? cursors[page - 2] : null;

    setLoading(true);
    try {
      const res = await gqlClient.request<AllPeopleResponse>(GET_PEOPLE, {
        first: limit,
        after,
      });

      setCharacters(res.allPeople.people);
      setTotalPages(Math.ceil(res.allPeople.totalCount / limit));

      if (res.allPeople.pageInfo?.endCursor && cursors.length < page) {
        setCursors((prev) => {
          const updated = [...prev];
          updated[page - 1] = res.allPeople.pageInfo.endCursor;
          return updated;
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(page, ITEMS_PER_PAGE);
  }, [page]);

  return (
    <div className="p-4 min-h-screen my-10 py-12 px-10">
      <AnimatedBackground />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 w-full">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} className="h-[120px] w-full mb-3" />
            ))
          : characters.map((char) => (
              <div
                key={char.id}
                className="holographic-container py-3"
              >
                <div className="bg-gray-800 p-4 rounded text-white holographic-card">
                  <h3 className="text-lg text-[#facc15] mb-3">{char.name}</h3>
                  <p>Gender: {char.gender || "undefined"}</p>
                  <p>Born: {char.birthYear || "undefined"}</p>
                </div>
              </div>
            ))}
      </div>

      <Pagination className="pt-4 mt-14 text-white">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage((p) => p - 1)}
              className={page === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>

          {getPaginationItems(page, totalPages).map((item, index) => (
            <PaginationItem key={index}>
              {item === "..." ? (
                <span className="px-2 text-white">...</span>
              ) : (
                <PaginationLink
                  isActive={page === item}
                  onClick={() => setPage(Number(item))}
                  href="#"
                >
                  {item}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

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
