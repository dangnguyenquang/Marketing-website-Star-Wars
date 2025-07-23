"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Film } from "@/types/movies";
import { formatDate } from "@/lib/formatDate";
import { useRouter } from "next/navigation";
import { PATH_NAME } from "@/configs/pathName";

export default function MovieCarousel({ movies }: { movies: Film[] }) {
  const router = useRouter();

  const handleNavigate = (id: string) => {
    router.push(`${PATH_NAME.MOVIE_LIST}/${id}`);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Epic Saga
        </h3>
        <p
          className="text-white hover:underline text-sm cursor-pointer"
          onClick={() => {
            router.push(PATH_NAME.MOVIE_LIST);
          }}
        >
          More
        </p>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-3 z-10 max-md:hidden">
        <button className="swiper-button-prev-custom bg-gray-800 hover:bg-gray-500 text-white h-10 w-10 duration-300 cursor-pointer rounded-full shadow">
          &#8592;
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-3 z-10 max-md:hidden">
        <button className="swiper-button-next-custom bg-gray-800 hover:bg-gray-500 text-white duration-300 cursor-pointer h-10 w-10 rounded-full shadow">
          &#8594;
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        slidesPerView={1.4}
        spaceBetween={16}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="group"
      >
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="py-3 cursor-pointer"
            onClick={() => handleNavigate(movie.id)}
          >
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out text-white text-sm hover:drop-shadow-[0_0_10px_rgba(217,255,54,0.5)]">
              <div className="aspect-video bg-gray-700 flex items-center justify-center text-xs bg-[url('/images/a8ab20f94412b47bc5c22deab38dd358.jpg')] bg-cover bg-center bg-no-repeat">
                <h3 className="font-semibold truncate mb-18 text-xl ">
                  {movie.title}
                </h3>
              </div>
              <div className="p-3">
                <p className="text-gray-400 mt-1">Director: {movie.director}</p>
                <p className="text-gray-500 mt-1">
                  Release day: {formatDate(movie.releaseDate)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
