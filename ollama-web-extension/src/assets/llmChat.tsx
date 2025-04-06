import { useState, useEffect } from "react"

import MessageReturn from "./messageReturn"


function LlmChat() {

    const [input, setInput] = useState('')

    useEffect(() => {
        console.log("E")
    }, [input])

    const handleSubmit = () => {
        alert(input);
    }


    return (
        <div className="flex justify-center items-center inset-x-0 bottom-0 h-4/5 text-white">
            <MessageReturn/>

            <form onSubmit={handleSubmit}>
                <label>
                    Enter your message:
                    <input className="text-black" type='text' value={input} onChange={(e) => setInput(e.target.value)} />
                </label>
                <input type='submit' />
            </form>
        </div>
    )
}

export default LlmChat