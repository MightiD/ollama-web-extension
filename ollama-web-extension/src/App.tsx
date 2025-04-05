import { useEffect, useState } from "react"
import { z } from 'zod';

import ModelList from "./assets/modelList"

const retData = z.object({
    models: z.array(
        z.object({
            name: z.string(),
            model: z.string(),
            modified_at: z.string(),
            size: z.number(),
            digest: z.string(),
            details: z.object({
                parent_model: z.string(),
                format: z.string(),
                family: z.string(),
                families: z.array(z.string()),
                parameter_size: z.string(),
                quantization_level: z.string()
            })
        })
    )
})

type retData = z.infer<typeof retData>


function App() {
  const [models] = useState<string[]>([]) //list of all models
  const [currentModel, setCurrentModel] = useState("") //currently selected model

  useEffect(() => {
      fetch('http://localhost:11434/api/tags', {
          method: 'GET'
      })
      .then(res => res.json())
      .then((res: retData) => {
          const validRes = retData.safeParse(res)
          if (!validRes.success) {
              console.error(validRes.error);
              return;
          }
          const parsedData = validRes.data;

          parsedData?.models.map((model) => {
            models.push(model.name)
          })

          setCurrentModel(validRes.data.models[0].name)
      })

  }, [])

  return (
    <div className='w-[400px] h-[500px] bg-black'>
      <div className="flex justify-center items-center pt-10">
        <p className="text-[14px] text-white">
          Ollama Web Extension
        </p>
      </div>

    <ModelList currentModel={currentModel} models={models} handleList={setCurrentModel}/>

    </div>
  )
}

export default App
