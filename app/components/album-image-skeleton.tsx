import AlbumSkeleton from "./album-skeleton";

export default function AlbumImageSkeleton() {

  const numberOfImages = 20;
  const skeletonImages = [];
 
  for (let i = 0; i < numberOfImages; i++) {
    skeletonImages.push(<AlbumSkeleton key={i} />); 
  };

  return(        
    <div className="max-w-7xl mx-auto grid grid-cols-12">
      <div className="col-span-12">        
        <div className="grid grid-cols-2 gap-4 mt-4 mb-4 md:grid-cols-6 p-5">               
          {skeletonImages}
        </div>  
      </div>
    </div>
)};