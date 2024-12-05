import Albums from "@/app/components/albums"; 
import { poppins, raleway } from "@/app/layout";
import { createUrl } from "@/lib/http";
import { Artist } from "@/types/artist";
import Image from 'next/image'
import { notFound } from 'next/navigation';
import Members from "../../components/members";

export type Props = 
{
  params: {
    id: number;
  };  
} 

async function getArtist(id: number): Promise<Artist> {
  
  const res = await fetch(createUrl('artists/artist-full-details/' + id), {
    cache: 'force-cache',
  });

  if (!res.ok) {
    if(res.status == 404)
      notFound(); 
  }

  return res.json();
} 

export default async function ArtistPage( { params }:{ params: Promise<{ id: number }> }  ){
     
  const {id} = await params; 
  const artist = await getArtist(id); 
 
  return  (
    <>
    {artist && ( 
      <div className="flex w-full justify-center flex-1">
        <div className="grid grid-cols-12 w-full md:grid-cols-12 md:w-[90%] lg:w-[66%] border-l-2 border-r-2 py-4 px-4"> 
          <div className="p-4 text-left grid-cols-1 col-span-12 md:grid-cols-3">
            <Image className="h-48 w-full object-cover md:h-full md:w-48" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt={artist.name} src={`${process.env.NEXT_PUBLIC_AZURE_STORAGE_URL}artists/${artist.photo}`}/>
            <Members members={artist.members}></Members> 
          </div> 
          <div className="p-4 grid-cols-1 col-span-9 md:grid-cols-9">
            <div className={`${poppins.className} tracking-wide text-4xl text-zinc-600`}>{artist.name}</div>             
            <div className={`${raleway.className} mt-2 py-4 text-black border-t-2 border-black prose`} dangerouslySetInnerHTML={{ __html: artist.description }}>  
            </div> 
            <Albums albums={artist.albums}></Albums>
          </div>  
        </div>
      </div>
    )}
  </> 
  )
}