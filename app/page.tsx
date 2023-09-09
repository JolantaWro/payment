import Link from "next/link"

async function getUser() {
  const res = await fetch('/api/getUser')
}


export default function Home() {
 
  return (
    <main>
      <Link href={"/dashboard"} className='flex h-screen items-center justify-center'>Go to the dasboard</Link>
    </main>
  )
}