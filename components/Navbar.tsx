import SignIn from '@/components/SignIn'
import SignOut from '@/components/SignOut'
import { getServerSession } from 'next-auth';

export default async function Navbar(){
    const session = await getServerSession();

    return (
        <div className="z-50 w-screen h-[9vh] flex flex-row items-center fixed top-0 bg-white">
            <a href="/cards" className="h-full relative flex items-center">
                <img src="/flash-card.png" className="h-[60%] mr-auto ml-5" />
            </a>
            {
            !session?.user 
            ? 
            <SignIn /> 
            :
        
            <div className="rounded-md relative h-full ml-auto mr-3">
                <a href="/profile" className="flex flex-row relative h-full items-center">
                    {session.user?.image ? 
                        <img className="h-[60%] rounded-full" alt="profile-picture" src={session.user.image as string} />
                        :
                        null
                    }
                    <p className="poppins text-black text-md font-[500] ml-2">{session.user.name?.split(" ")[0]}</p>
                </a>
            </div>
            }
        </div>
    )
}