import { poppins } from "@/app/layout";
import { Song } from "@/types/song";
import getAlbumSongsTotalLength from "@/lib/time"

type IProps = {
  tracks: Song[]; 
};

export default function AlbumTracks({tracks} : IProps){ 

  const totalAlbumTime = getAlbumSongsTotalLength(tracks);

  return (     
    <div className="w-full">
      <div className="text-2xl mt-5 mb-5 border-b-2">Tracks</div>
      {tracks.map((track: Song, index) => (     
        <div key={track.id} className={`${poppins.className} grid grid-cols-12 md:grid-cols-12 hover:bg-zinc-400 hover:text-white`}>
          <div className="p-0 text-left grid-cols-3 md:grid-cols-3 col-span-1 md:col-span-1">{index+1}</div>
          <div className="p-0 text-left grid-cols-6 md:grid-cols-6 col-span-7 md:col-span-8">{track.song.title}</div>
          <div className="p-0 text-right grid-cols-3 md:grid-cols-3 col-span-3 md:col-span-3">{track.song.length}</div> 
        </div>
      ))} 
      <div className={`${poppins.className} grid grid-cols-12 md:grid-cols-12`}>
        <div className="p-0 text-left grid-cols-3  md:grid-cols-3 col-span-1 md:col-span-1"></div>
        <div className="p-0 text-right grid-cols-6 md:grid-cols-6 col-span-7 md:col-span-8">Total</div>
        <div className="p-0 text-right grid-cols-3 md:grid-cols-3 col-span-3 md:col-span-3">{totalAlbumTime}</div> 
      </div>
    </div>
)}