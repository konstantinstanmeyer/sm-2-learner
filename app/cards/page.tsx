import { getServerSession } from "next-auth";

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

export default async function Cards(){
    const data = await getCards();

    if(data) return <p>not logged in</p>

    return (
        <div>

        </div>
    )
}