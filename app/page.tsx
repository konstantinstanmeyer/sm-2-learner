import Image from 'next/image'
import Card from '@/components/Card'
import samples from '@/lib/samples'

export default async function Home() {
  return (
   <div className="w-full h-full position fixed flex justify-center items-center">
    <Card cardInfo={samples[3]} />
   </div>
  )
}
