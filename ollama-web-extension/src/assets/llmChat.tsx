import { useState } from "react"

type props = {
    model: string;
}

function LlmChat({ model }: props) {

    const [input, setInput] = useState('')
    // const [response, setResponse] = useState('')

    function getUserInput(formData: React.FormEvent<HTMLFormElement>) {
        //gets the user input
        formData.preventDefault();
        const query = new FormData(formData.currentTarget)
        const formObject = Object.fromEntries(query.entries())
        setInput(formObject.chatInput as string)

    }

//https://stackoverflow.com/questions/77276369/how-to-access-form-data-in-a-post-request-when-using-react-typescript

    return (
        <div className="flex justify-center items-center inset-x-0 bottom-0 h-4/5 text-white">
            <p className="text-white">
                E
            </p>

            <form onSubmit={getUserInput}>
                <input className="text-black" name='chatInput' type='text' id='chatInput' />
                <button type='submit'/>
            </form>
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