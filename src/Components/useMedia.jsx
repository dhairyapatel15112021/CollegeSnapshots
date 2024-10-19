import React, { useEffect, useState } from 'react'
import { BackendCall } from './BackendCall';

export const useMedia = (media) => {
    const [data,setData] = useState(media);

    useEffect(()=>{
        data.map((item,index)=>{
            return(
                BackendCall(item,index,data,setData)
            )
        })
    },[media]);
  return (
    data
  )
}
