import Image from "next/image";
import React from "react";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Body() {
  const router = useRouter(); // useRouter is used to push to search page
  const searchInputRef = useRef(null); // useRef is used to get the value of the input
  // Search function
  function search(event) {
    event.preventDefault();
    const term = searchInputRef.current.value; // get the value of the input
    if (!term.trim()) return; // if term is empty, return & trim function removes white spaces
    router.push(`/search?term=${term.trim()}&searchType=`); // push to search page
  }
  //random search function
  async function randomSearch(event) {
    event.preventDefault();
    const randomTerm = await fetch("https://random-word-api.herokuapp.com/word?number=1").then((response) => response.json()) // get the value of the input
    if (!randomTerm) return; // if term is empty, return & trim function removes white spaces
    router.push(`/search?term=${randomTerm}&searchType=`); // push to search page
  }

  return (
    <>
      <form className="flex flex-col items-center mt-40">
        <Image
          className="w-52 object-cover cursor-pointer  transition duration-700 ease-out transform hover:scale-125"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          width={300}
          height={100}
          alt="google-logo"
          priority={true}
        />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-3 " />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5 " />
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center ">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={randomSearch} className="btn">I&apos;m Feeling Lucky</button>
        </div>
      </form>
    </>
  );
}
