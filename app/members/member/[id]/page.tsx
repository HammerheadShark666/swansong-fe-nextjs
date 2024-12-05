import { poppins, raleway } from "@/app/layout";
import { createUrl } from "@/lib/http"; 
import Image from 'next/image'
import { notFound } from 'next/navigation'; 
import { Member } from "@/types/member";

export type Props = 
{
  params: {
    id: number;
  };  
} 

async function getMember(id: number): Promise<Member> {
  const res = await fetch(createUrl('members/member/' + id), {
    cache: 'force-cache',
  });

  if (!res.ok) {
    if(res.status == 404)
      notFound(); 
  }

  return res.json();
} 

export default async function MemberPage( { params }:{ params: Promise<{ id: number }> }  ){
     
  const {id} = await params; 
  const member = await getMember(id); 
 
  return  (
  <>
    {member && ( 
      <div className="flex w-full justify-center flex-1">
        <div className="grid grid-cols-12 w-full md:grid-cols-12 md:w-[90%] lg:w-[66%] border-l-2 border-r-2 py-4 px-4"> 
          <div className="p-4 text-left grid-cols-1 col-span-3 md:grid-cols-3">
            <Image className="h-48 w-full object-cover md:h-full md:w-48" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt={member.stageName} src={`${process.env.NEXT_PUBLIC_AZURE_STORAGE_URL}members/${member.photo}`}/>
          </div> 
          <div className="p-4 grid-cols-1 col-span-9 md:grid-cols-9">
            <div className={`${poppins.className} tracking-wide text-4xl text-zinc-600`}>{member.stageName}</div>       
            <div className={`${raleway.className} mt-2 py-4 text-black border-t-2 border-black prose`} dangerouslySetInnerHTML={{ __html: member.description }}></div>      
          </div>  
        </div>
      </div>
    )}
  </> 
)}