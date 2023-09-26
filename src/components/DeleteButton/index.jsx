export function DeleteButton ({handleClick}) {
    return (
        <button className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={handleClick}>
        Excluir
      </button>
    )
}