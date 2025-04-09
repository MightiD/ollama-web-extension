import { useState } from "react"
import ollama  from "ollama/browser"

type props = {
    model: string;
}

type chatLlmProps = {
    model: string;
    formInput: string;
}

function LlmChat({ model }: props) {

    const [response, setResponse] = useState('')

    async function chatLlm({ model, formInput }: chatLlmProps) {
        const message = { role: 'user', content: formInput }
        const chatRes = await ollama.chat({ model: model, messages: [message], stream: true })
        for await (const part of chatRes) {
            setResponse((response) => response + part.message.content)
        }
    }

    function getUserInput(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const query = new FormData(e.currentTarget)
        //input as an object form
        const formObject = Object.fromEntries(query)
        const formInput = formObject.chatInput as string

        chatLlm({ model, formInput })
    }

    return (
        <div className="flex justify-center items-center inset-x-0 bottom-0 h-4/5 text-white">
            <div className="text-white">
                {response}
            </div>

            <div>
                <form onSubmit={getUserInput}>
                    <input className="text-black" name='chatInput' type='text' id='chatInput' />
                    <button type='submit'/>
                </form>
            </div>            
        </div>
    )
}

export default LlmChat