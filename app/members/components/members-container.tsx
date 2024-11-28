import AlbumImage from "@/app/components/albumImage"; 
import { createUrl } from "@/lib/http"; 
import { MemberLookup } from "@/types/memberLookup";
import Link from "next/link";
import { notFound } from "next/navigation"; 
import getToolTip from "@/lib/tooltip";
import getUrl from "@/lib/http";

async function getMembers(): Promise<MemberLookup[]> {
  const res = await fetch(createUrl('members/random'));

  if (!res.ok) {
    if(res.status == 404)
      notFound(); 
  }

  return res.json();
} 

export default async function MembersContainer() {

  const members = await getMembers(); 
 
  return (          
    <>        
      {members && (          
        <div className="max-w-7xl mx-auto grid grid-cols-12">
          <div className="col-span-12">      
            <div className="grid-cols-12 pt-5 pl-5"> 
              <span className="text-lg">Members</span>
            </div>     
            {members && (
              <div className="grid grid-cols-2 gap-4 mb-4 md:grid-cols-6 p-5"> 
                {members.map((member: MemberLookup) => (     
                  <Link key={member.id} href={`${getUrl("members", member.id)}`}>
                    <div className="tooltip object-fill w-full" data-tip={getToolTip(member)}>                      
                      <AlbumImage id={member.id} name={member.stageName} photoSrc={`${process.env.NEXT_PUBLIC_AZURE_STORAGE_URL}members/${member.photo}`}/>                 
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