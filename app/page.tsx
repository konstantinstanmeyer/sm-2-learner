import Image from 'next/image'
import Card from '@/components/Card'
import samples from '@/lib/samples'
import SignIn from '@/components/SignIn'
import { getServerSession } from 'next-auth'
import { authConfig } from '@/lib/auth/config'

export default async function Home() {
  const session = await getServerSession(authConfig);
  // console.log("Session: ", session);

  return (
   <div className="w-full h-full position fixed flex justify-center items-center bg-gray-200">
    <SignIn />
    <Card cardInfo={samples[3]} />
   </div>
  )
}
