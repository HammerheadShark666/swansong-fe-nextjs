import { createUrl } from "@/lib/http";

export async function GET() {
  const res = await fetch(createUrl('albums/random'), {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json' 
      // 'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
  
  return Response.json({ data })
}

 