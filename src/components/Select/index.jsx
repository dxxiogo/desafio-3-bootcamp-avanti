export function Select ({options, id, value, handleChange}) {
    console.log(options)
    if(options) {
        return (
            <div>
                <label htmlFor={id}>Times:</label>
                <select id={id} value={value} onChange={handleChange} >
                    <option value="">Selecione um time</option>
                    {options.map((option) => (
                        <option key={option.id} value={option.id}>{option.name}</option>
                    ))}
                </select>
            </div>
        )
    } else {
        return 'Adicione times para adicionar os jogadores'
    }
}