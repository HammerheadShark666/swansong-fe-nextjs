import Albums from "@/app/components/albums"; 
import { createUrl } from "@/lib/http"; 
import { AlbumLookup } from "@/types/albumLookup";
import { notFound } from "next/navigation"; 

async function getAlbums(): Promise<AlbumLookup[]> {

  const res = await fetch(createUrl('albums/random'));
  if (!res.ok) {
    if(res.status == 404)
      notFound(); 
  }

  return res.json();
} 

export default async function AlbumsContainer() {

  const albums = await getAlbums(); 

  return (          
    <>
      {albums && (          
        <Albums albums={albums}></Albums>
      )}       
    </>
  );
}