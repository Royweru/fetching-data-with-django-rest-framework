import { error } from "console"
import axios from "axios"

export default async function fetchAllPosts(){
   try {
    const res = await axios.get('http://127.0.0.1:8000/api/')
    return res.data
   } catch (error) {
     console.error('you got an err:', error)
   }
}
