import { getServerSession } from "next-auth/next"

export default async function Add(){
    const session = await getServerSession();

    console.log(session?.user)

    return (
        <div>
            
        </div>
    )
}