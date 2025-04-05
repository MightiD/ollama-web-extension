import { useState, useEffect } from "react"

import MessageReturn from "./messageReturn"


function LlmChat() {

    const [input, setInput] = useState('')

    useEffect(() => {
        console.log("E")
    }, [input])



    return (
        <div className="flex justify-center items-center inset-x-0 bottom-0 h-4/5">
            <MessageReturn/>

            <input className="inset-x-0 bottom-0" onChange={e => {
                setInput((e.target as HTMLInputElement).value);
            }}>
            
            </input>
        </div>
    )
}

export default LlmChat