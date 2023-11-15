import Image from 'next/image'
import Card from '@/components/Card'
import samples from '@/lib/samples'
import SignIn from '@/components/SignIn'

export default function Home() {
  return (
   <div className="w-full h-full position fixed flex justify-center items-center bg-gray-200">
    <SignIn />
    <Card cardInfo={samples[3]} />
   </div>
  )
}
