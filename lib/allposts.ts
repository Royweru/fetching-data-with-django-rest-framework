import { error } from "console"


export default async function fetchAllPosts(){
    const result = await fetch('http://127.0.0.1:8000/api/',{next:{revalidate:60}})

    if(!result.ok){
        throw new Error("Failed to fetch data")
    }
    return result.json()
}
