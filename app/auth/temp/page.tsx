import axios from "axios";
import { headers } from "next/headers";

const page = async() => {


    const response2 = await fetch('http://localhost:3000/api/whoami'
        ,
        {
        method: 'GET',
        headers:headers()
    }
);
    const data = await response2.json();
    console.log(data,'dwidhidh',headers())

    return (
        <div>page </div>
    )
}

export default page