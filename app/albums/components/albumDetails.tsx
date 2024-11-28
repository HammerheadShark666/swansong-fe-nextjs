import { Album } from "@/types/album";
import DateField from "./dateField";
import TextField from "./textField";

type IProps = {    
  album: Album;
};
  
export default function AlbumDetails({album} : IProps){ 
return (
  <div className="max-w-sm mt-5 p-4 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">  
    {album.releaseDate !== null && ( 
        <DateField label={'Release Date'} date={album.releaseDate}/>
    )} 
    
    {album.recordedDate !== null && ( 
        <DateField label={'Recorded Date'} date={album.recordedDate}/>
    )}

    {album.producers !== null && (
        <TextField label={'Producers'} text={album.producers}/>   
    )}

    {album.arrangers !== null && (
        <TextField label={'Arrangers'} text={album.arrangers}/>   
    )}

    {album.engineers !== null && (
        <TextField label={'Engineers'} text={album.engineers}/>   
    )}

    {album.artwork !== null && (
        <TextField label={'Artwork'} text={album.artwork}/>   
    )}
  </div>
)};