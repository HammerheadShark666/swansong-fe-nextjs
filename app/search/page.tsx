import SearchResultsContainer from "./components/search-results-container";
import ImageSkeleton from "../components/image-skeleton";
import { Suspense } from "react";

type tParams = Promise<{ criteria: string }>;

export default async function SearchPage(props: { searchParams: tParams }) {
      const { criteria } = await props.searchParams;

  return (
    <Suspense fallback={<ImageSkeleton ></ImageSkeleton>}>  
      <SearchResultsContainer criteria={criteria} ></SearchResultsContainer>
    </Suspense>
  )
}