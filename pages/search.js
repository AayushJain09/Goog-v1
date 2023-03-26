import SearchHeader from "@/components/SearchHeader";
import Head from "next/head";

export default function search() {
  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>
      {/* Search Header */}
      <SearchHeader />

      {/* Search Results */}
    </div>
  );
}
