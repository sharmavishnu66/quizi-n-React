import { useEffect, useState } from "react"

export default function QuestionTimer({timeOut,onTimeOut,mode}){

    const [remainingTime,setRemainingTime] = useState(timeOut)

    useEffect(() =>{
       const out = setTimeout(onTimeOut,timeOut);

        return () =>{
            clearTimeout(out)
        }
    },[onTimeOut,timeOut])
      useEffect(() =>{
      const interval =  setInterval(() =>{
            setRemainingTime(prev => prev - 100);
        },100)

        return () =>{
            clearInterval(interval);
        }
      },[])
    return <progress id="question-time" value={remainingTime} max={timeOut} className={mode} />
}