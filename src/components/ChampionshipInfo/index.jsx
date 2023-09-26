import { useChampionship } from "../../contexts/championshipContext"
import { ViewButton } from "../ViewButton";
import { DeleteButton } from "../DeleteButton";

export default function ChampionshipInfo ({id, name, endDate, startDate}) {

    const {deleteChampionship} = useChampionship();

    return (
        <div className="border rounded-lg p-4 mb-4 shadow-md w-[550px]">
        <span className="text-lg font-bold">Nome: {name}</span>
        <div className="mt-2 flex gap-2">
          <DeleteButton handleClick={() => deleteChampionship(id)}/>
          <ViewButton content={'Times'}/>
        </div>
        <div className="mt-2 text-gray-700 flex flex-col">
          <span className= "text-black">Data início: {startDate}</span>
          <span className="text-black">Data de fim: {endDate}</span>
        </div>
      </div>
      
    )
}