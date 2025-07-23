"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PATH_NAME } from "@/configs/pathName";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchValue.trim()) {
      router.push(`${PATH_NAME.MOVIE_LIST}?search=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="flex items-center justify-between gap-2 bg-[#2f3640] rounded-full relative w-full">
        <input
          className="border-none bg-transparent outline-none text-white text-[15px] px-6 py-6 pr-[70px] w-full placeholder-gray-400
                     md:text-sm md:py-5 md:pr-[60px] md:px-5
                     sm:text-[13px] sm:py-[18px] sm:pr-[54px] sm:px-[18px]
                     xs:py-4 xs:pr-[50px] xs:px-4"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={() => handleKeyPress}
          placeholder="Search for movies ..."
          aria-label="Search for movies"
        />
        <button 
          onClick={handleSearch}
          disabled={!searchValue.trim()}
          className="absolute right-2 w-[50px] h-[50px] rounded-full border-0 
                     bg-gradient-to-r from-[#2af598] to-[#facc15] text-white
                     flex items-center justify-center transition-all duration-300 ease-out
                     hover:bg-[#1a1a1a] hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:-translate-y-1
                     active:shadow-none active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed
                     md:w-[44px] md:h-[44px] md:right-[6px]
                     sm:w-[40px] sm:h-[40px] sm:right-1
                     xs:w-[36px] xs:h-[36px]"
          aria-label="Search"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-4 sm:h-4 xs:w-[14px] xs:h-[14px]"
          >
            <path 
              d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;