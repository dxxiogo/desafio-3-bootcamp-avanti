import { useChampionship } from "../../contexts/championshipContext"
import { ViewButton } from "../ViewButton";
import { DeleteButton } from "../DeleteButton";
import { Link } from "react-router-dom";

function formatDate(date) {
  const formattedDate = new Date(date); 
  const day = formattedDate.getDate().toString().padStart(2, '0'); 
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0'); 
  const year = formattedDate.getFullYear();

  return `${day}/${month}/${year}`;
}


export default function ChampionshipInfo ({id, name, endDate, startDate}) {

    const {deleteChampionship} = useChampionship();

    return (
        <div className="border rounded-lg p-4 mb-4 shadow-md w-[550px]">
        <span className="text-lg font-bold">Nome: {name}</span>
        <div className="mt-2 flex gap-2">
          <DeleteButton handleClick={() => deleteChampionship(id)}/>
          <Link to={`/teamsByChampionship/${id}`}>
            <ViewButton content={'Times'}/>
          </Link>
        </div>
        <div className="mt-2 text-gray-700 flex flex-col">
          <span className= "text-black">Data início: {formatDate(startDate)}</span>
          <span className="text-black">Data de fim: {formatDate(endDate)}</span>
        </div>
      </div>
      
    )
}