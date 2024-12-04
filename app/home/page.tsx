import AlbumsContainer from "@/app/components/albums-container";  
import { Suspense } from "react"; 
import ImageSkeleton from "../components/image-skeleton";

export default async function Home() {  
  return (       
    <Suspense fallback={<ImageSkeleton></ImageSkeleton>}>
      <AlbumsContainer></AlbumsContainer> 
    </Suspense>  
  );
}