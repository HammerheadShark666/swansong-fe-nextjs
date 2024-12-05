import { Suspense } from "react";
import AlbumsContainer from "../components/albums-container";
import AlbumImageSkeleton from "../components/album-image-skeleton";
 
export default async function AlbumsPage() {
  return (   
    <Suspense fallback={<AlbumImageSkeleton></AlbumImageSkeleton>}>
      <AlbumsContainer></AlbumsContainer> 
    </Suspense>
  );
}