import { getServerSession } from "next-auth";

export default async function Cards(){
    const data = await getCards();

    if(!data) return <p>not logged in</p>

    // console.log(data)

    return (
        <div className="w-screen flex flex-col items-center relative">
            {data.length < 1 ? 
            <div className="h-screen flex items-center justify-center">
                add+...
            </div>
            :
            <div className="flex w-3/4 flex-wrap">
                
            </div>
            }
        </div>
    )
}

async function getCards(){
    const session = await getServerSession()
    const email = session?.user?.email;

    if(email){
        const res = await fetch('http://localhost:3000/api/card',{
            method: "GET",
            headers: {
                "Authorization": email
            }
        })

        if(!res.ok) {
            throw new Error("Could not fetch data from server, please try again.")
        }

        return res.json();
    } else {
        return false;
    }
}
