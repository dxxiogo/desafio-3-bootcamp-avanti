export function Select({ options, label, id, value, handleChange, ...rest}) {
    
    if(options)
        return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
                {label}
            </label>
            <select
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${rest.className}`}
            id={id}
            value={value}
            onChange={handleChange}
            >
                <option value="">Selecione um time</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                    {option.nome}
                    </option>
                ))}
            </select>
        </div>
        );
  }
  