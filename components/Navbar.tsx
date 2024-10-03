import SignIn from '@/components/SignIn'
import SignOut from '@/components/SignOut'

export default function Navbar({ session }: any){

    return (
        <div className="z-50 w-screen h-[9vh] flex flex-row items-center fixed top-0 bg-white">
            <a href="/cards" className="h-full relative flex items-center ">
                <img src="/indonesia.png" className="max-h-[60%] max-w-[60%] ml-5 shadow-xl p-2 bg-gray-300 rounded-lg" />
            </a>
            {
            !session?.user 
            ? 
            <SignIn /> 
            :
        
            <div className="rounded-md relative h-full ml-auto">
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