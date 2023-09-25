import { useChampionship } from "../../contexts/championshipContext"
import { ViewButton } from "../ViewButton";
import { DeleteButton } from "../DeleteButton";

export default function ChampionshipInfo ({id, name, endDate, startDate}) {

    const {deleteChampionship} = useChampionship();

    return (
        <div class="border rounded-lg p-4 mb-4 shadow-md">
        <span class="text-lg font-bold">Nome: {name}</span>
        <div class="mt-2 flex gap-2">
          <DeleteButton handleClick={() => deleteChampionship(id)}/>
          <ViewButton content={'Times'}/>
        </div>
        <div class="mt-2 text-gray-700">
          <span>Data início: {startDate}</span>
          <span class="ml-4">Data de fim: {endDate}</span>
        </div>
      </div>
      
    )
}