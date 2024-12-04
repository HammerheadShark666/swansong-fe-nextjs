import AlbumImage from "@/app/components/albumImage";
import { createUrl } from "@/lib/http"; 
import { ArtistLookup } from "@/types/artistLookup";
import Link from "next/link";
import { notFound } from "next/navigation"; 
import getToolTip from "@/lib/tooltip";
import getUrl from "@/lib/http";

async function getArtists(): Promise<ArtistLookup[]> {

  const { signal } = new AbortController()
  const res = await fetch(createUrl('artists/random'), { signal });
  if (!res.ok) {
    if(res.status == 404)
      notFound(); 
  }

  return res.json();
} 

export default async function ArtistsContainer() {

  const artists = await getArtists();  

  return (          
     <>        
      {artists && (          
        <div className="max-w-7xl mx-auto grid grid-cols-12">
          <div className="col-span-12">          
            <div className="grid-cols-12 pt-5 pl-5"> 
              <span className="text-lg">Artists</span>
            </div>      
            {artists && (
              <div className="grid grid-cols-2 gap-4 mb-4 md:grid-cols-6 p-5">  
                {artists.map((artist: ArtistLookup) => (     
                  <Link key={artist.id} href={`${getUrl("artists", artist.id)}`}>
                    <div className="tooltip object-fill w-full" data-tip={getToolTip(artist)}>                      
                      <AlbumImage id={artist.id} name={artist.name} photoSrc={`${process.env.NEXT_PUBLIC_AZURE_STORAGE_URL}artists/${artist.photo}`}/>                 
                    </div>
                  </Link>              
                ))}
              </div>
            )}       
          </div>
        </div> 
      )}       
    </>
  );
}