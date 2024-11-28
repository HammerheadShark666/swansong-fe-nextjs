import { Suspense } from "react";
import ImageSkeleton from "../components/image-skeleton";
import MembersContainer from "./components/members-container";
 
export default async function MembersPage() {
  return (    
    <Suspense fallback={<ImageSkeleton ></ImageSkeleton>}> 
      <MembersContainer></MembersContainer>
    </Suspense>       
  );
}