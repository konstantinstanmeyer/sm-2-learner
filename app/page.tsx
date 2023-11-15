import Image from 'next/image'
import Card from '@/components/card'
import samples from '@/lib/samples'

export default function Home() {
  return (
   <div className="w-full h-full position fixed flex justify-center items-center bg-gray-200">
    <Card cardInfo={samples[2]} />
   </div>
  )
}
