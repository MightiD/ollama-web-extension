import { useState } from "react"
import ollama  from "ollama/browser"

type props = {
    model: string;
}

type chatLlmProps = {
    model: string;
    input: string;
}

function LlmChat({ model }: props) {

    const [input, setInput] = useState('')
    const [response, setResponse] = useState('')

    async function chatLlm({ model, input }: chatLlmProps) {
        const message = { role: 'user', content: input }
        const response = await ollama.chat({ model: model, messages: [message], stream: true })
        for await (const part of response) {
            setResponse(response + (part.message.content))
            // console.log(part.message.content)
            // console.log(response)
        }
    }

    function getUserInput(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const query = new FormData(e.currentTarget)
        //input as an object form
        const formObject = Object.fromEntries(query)
        const formInput = formObject.chatInput as string

        setInput(formInput)
        console.log(typeof(formInput))
        console.log(input)
        chatLlm({ model, input })

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

/*

HOW TO MAKE CODE WORK

1. wait for user to submit the form
2. Get user input, store in input variable using setInput()
3. then, make an api call to ollama
4. get the streamed return messages
5. display them to the screen

*/