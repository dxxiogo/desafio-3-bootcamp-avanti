export function ViewButton ({content, handleClick}) {
    return (
        <button onClick={handleClick} class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            {content}
          </button>
    )
}