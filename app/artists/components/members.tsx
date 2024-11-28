import { Member } from "@/types/member";
import Link from "next/link";
import getUrl from "@/lib/http";

type IProps = {    
  members: Member[];
};
    
export default function Members({members} : IProps){ 
  return (
    <div className="w-full">
      <div className="text-2xl mt-5 mb-5 border-b-2">Members</div>
      {members.map((member: Member, index) => (     
        <div key={index} className="grid grid-cols-12 text-xs  pt-1">  
          <div className="col-span-12 text-base p-2 hover:bg-zinc-400 hover:text-white">
            <Link key={member.id} href={`${getUrl("members", member.id)}`}>
              {member.stageName}
            </Link>
          </div>
        </div>
      ))} 
  </div>
)}