type props = {
    models: string[];
    currentModel: string;
    handleList: (value: string) => void;
};

function ModelList({models, currentModel, handleList}: props) {
    return (
        <select className="w-[200px] h-[20px] p-10px" value={currentModel} onChange={e => {
            handleList(e.target.value);
        }}>
            {models.map((model) => (
                <option className="text-black" value={model} label={model}></option>
            ))}
        </select>
    )
}

export default ModelList
