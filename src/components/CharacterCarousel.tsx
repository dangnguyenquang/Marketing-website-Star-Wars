"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";
import { PATH_NAME } from "@/configs/pathName";

interface Character {
  id: string;
  name: string;
  gender: string;
  birthYear: string;
}

export default function CharacterCarousel({
  characters,
}: {
  characters: Character[];
}) {
  const router = useRouter();

  return (
    <section className="relative">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Legendary Heroes
        </h3>
        <p
          className="text-white hover:underline text-sm cursor-pointer"
          onClick={() => {
            router.push(PATH_NAME.CHARACTER_LIST);
          }}
        >
          More
        </p>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1.4}
        spaceBetween={16}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{
          clickable: true,
        }}
        className="group"
      >
        {characters.map((char) => (
          <SwiperSlide key={char.id} className="holographic-container py-3">
            <div className="bg-gray-800 p-4 rounded text-white holographic-card">
              <h3 className="text-lg text-[#facc15]">{char.name}</h3>
              <p>Gender: {char.gender || "undefined"}</p>
              <p>Born: {char.birthYear || "undefined"}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
