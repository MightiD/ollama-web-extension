// import { useState, useEffect } from "react"
// import ollama  from "ollama/browser"

// type props = {
//     model: string;
// }
// {model}: props


function LlmChat() {

    // const [input, setInput] = useState('')
    // const [response, setResponse] = useState('')

    function getUserInput(formData: React.FormEvent<HTMLFormElement>) {
        //gets the user input
        formData.preventDefault();
        const query = new FormData(formData.currentTarget)

        console.log(query)
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