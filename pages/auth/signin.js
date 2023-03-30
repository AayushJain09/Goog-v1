import Header from "@/components/Header";
import React from "react";
import { getProviders, signIn } from "next-auth/react";
// import Image from 'next/image';

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <img
              className="w-52 object-cover cursor-pointer transition duration-700 ease-out transform hover:scale-125"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="logo"
            />
            <p className="text-lg italic my-10 text-center">
              This website is created for learning purpose.
            </p>
            <button
              className="bg-red-500 text-white p-4 font-medium rounded-lg hover:bg-red-400 hover:shadow-md"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
