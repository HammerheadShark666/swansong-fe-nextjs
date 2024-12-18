import { Suspense } from "react";
import ArtistsContainer from "./components/artists-container";
import ImageSkeleton from "../components/skeleton/image-skeleton";
 
export default async function ArtistsPage() {
  return (   
    <Suspense fallback={<ImageSkeleton></ImageSkeleton>}>
      <ArtistsContainer></ArtistsContainer>     
    </Suspense>       
  );
}