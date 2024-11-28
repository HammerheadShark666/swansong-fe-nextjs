import SearchResultsContainer from "./components/search-results-container";
import ImageSkeleton from "../components/image-skeleton";
import { Suspense } from "react";

export default async function SearchPage({searchParams}: {searchParams: {[key: string]: string };}) {
    
  const params = await searchParams;

  return (
    <Suspense fallback={<ImageSkeleton ></ImageSkeleton>}>
      <SearchResultsContainer criteria={params.criteria} ></SearchResultsContainer>
    </Suspense>
  )
}