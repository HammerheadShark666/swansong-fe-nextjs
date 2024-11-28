import Image from 'next/image'
import Link from 'next/link';
import getUrl, { createUrl } from "@/lib/http"; 
import { Album } from '@/types/album';
import { poppins, raleway } from '@/app/layout';
import AlbumDetails from '../../components/albumDetails';
import AlbumTracks from '../../components/albumTracks';
import { notFound } from 'next/navigation';

export type Props = 
{
  params: {
    id: number;
  };  
} 

async function getAlbum(id: number): Promise<Album> {
  
  const res = await fetch(createUrl('albums/album/' + id), {
    cache: 'force-cache',
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
} 

export default async function AlbumPage( { params }:{ params: Promise<{ id: number }> }  ){
     
  const {id} = await params; 
  const album = await getAlbum(id); 

  return  (
    <>
    {album && ( 
      <div className="flex w-full justify-center">
        <div className="grid grid-cols-12 w-full md:grid-cols-12 md:w-[90%] lg:w-[66%] border-l-2 border-r-2 py-4 px-4">
          <div className="p-4 text-left grid-cols-1 col-span-12 md:col-span-4 md:grid-cols-4 lg:grid-cols-3 lg:col-span-3">
            <Image className="h-48 w-full object-cover md:h-full md:w-48" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt={album.name} src={`${process.env.NEXT_PUBLIC_AZURE_STORAGE_URL}albums/${album.photo}`}/>
             
            {(album.releaseDate !== null || album.recordedDate !== null || album.producers !== null 
              || album.arrangers !== null ||  album.engineers !== null || album.artwork !== null)
                && (                  
                  <AlbumDetails album={album}></AlbumDetails>                   
            )}
          </div> 
          <div className="p-4 grid-cols-12 col-span-12 md:col-span-8 md:grid-cols-8 lg:grid-cols-9 lg:col-span-9">
            <div className={`${poppins.className} tracking-wide text-4xl text-zinc-600`}>{album.name}</div> 
            <div className="grid grid-cols-12 text-xs  pt-1"> 
              <div className="col-span-7 font-semibold">
                <Link className={`${poppins.className} block mt-1 text-lg w-fit leading-tight font-medium text-slate-900 hover:underline`} key={album.artistId} href={`${getUrl("artists", album.artistId)}`}>
                  {album.artistName}
                </Link>
              </div>
              <div className={`${poppins.className} block mt-1 text-lg text-slate-900 col-span-5 text-right`}>
                {album.labelName}
              </div> 
            </div>
            <p className={`${raleway.className} mt-2 py-4 text-black border-t-2 border-black`} dangerouslySetInnerHTML={{ __html: album.description }}>  
            </p> 

            <AlbumTracks tracks={album.songs}></AlbumTracks>
          </div>  
        </div>
      </div>
    )}
  </> 
)}