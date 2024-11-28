import { Suspense } from "react";
import AlbumsContainer from "../components/albums-container";
import ImageSkeleton from "../components/image-skeleton";
 
export default async function AlbumsPage() {
  return (   
    <Suspense fallback={<ImageSkeleton></ImageSkeleton>}>
      <AlbumsContainer></AlbumsContainer> 
    </Suspense>
  );
}