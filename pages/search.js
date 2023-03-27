import SearchHeader from "@/components/SearchHeader";
import Response from "@/Response";
import Head from "next/head";

export default function search({results}) {
  console.log(results);
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
// server side rendering
export async function getServerSideProps(context) {
  const mockData = true // for testing
  const data= mockData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "searchType=image" }`
  ).then((response) => response.json());
  return {
    props:{
      results:data
    }
  }
}