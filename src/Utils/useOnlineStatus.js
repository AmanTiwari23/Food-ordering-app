import { useEffect, useState } from "react"

const useOnlineStatus = () =>{
     const [onlineStatus,setOnlineSatus] = useState(true)
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnlineSatus("true");
        })

        window.addEventListener("offline",()=>{
            setOnlineSatus(false);
        })
    })

    return onlineStatus;
}

export default useOnlineStatus;