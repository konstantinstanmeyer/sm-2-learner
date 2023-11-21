import SignIn from '@/components/SignIn'
import SignOut from '@/components/SignOut'
import { getServerSession } from 'next-auth';

export default async function Navbar(){
    const session = await getServerSession();

    return (
        <>
            {
            !session?.user 
            ? 
            <SignIn /> 
            :
        
            <div className="z-40 absolute right-0 top-0 mr-3 mt-3 flex-col">
                <a href="/profile" className="card block p-2 rounded-md">
                {session.user?.image ? 
                    <img className="w-16" alt="profile-picture" src={session?.user?.image as string} />
                    :
                    <p className="poppins text-gray-600 text-md">Hello, {session.user.name?.split(" ")[0]}</p>
                }
                <p className="mt-1 text-center text-sm underline underline-offset-2 text-gray-600 poppins">profile</p>
                </a>
                <SignOut />
            </div>
            }
        </>
    )
}