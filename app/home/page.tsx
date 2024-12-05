import AlbumsContainer from "@/app/components/albums-container";  
import { Suspense } from "react"; 
import AlbumImageSkeleton from "../components/album-image-skeleton";

export default async function Home() {  
  return (       
    <Suspense fallback={<AlbumImageSkeleton></AlbumImageSkeleton>}>
      <AlbumsContainer></AlbumsContainer> 
    </Suspense>  
  );
}