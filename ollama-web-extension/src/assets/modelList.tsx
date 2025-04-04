import { useState, useEffect } from "react";
import { z } from 'zod';

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

function ModelList() {
    const [model, setModel] = useState("")
    const [data, setData] = useState<retData>()
    // const [models, setModels] = useState([])

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
            setData(validRes.data);
            setModel(validRes.data.models[0].name)
        })

    }, [])

    return (
        <>
            <select className="w-[200px] h-[20px]" value={model} onChange={e => {
                setModel(e.target.value);
            }}>
                {data?.models.map((model) => (
                    <option className="text-black" value={model.name} label={model.name}></option>
                ))}
            </select>
        </>
    )
}

export default ModelList
