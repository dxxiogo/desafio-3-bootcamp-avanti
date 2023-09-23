export function Input ({id, label, type, value, handleChange}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input  id={id} type={type} onChange={handleChange} value={value}/>
        </div>
    )
}