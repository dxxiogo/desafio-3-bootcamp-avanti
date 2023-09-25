import { useTeam } from "../../contexts/teamsContext"
import { ViewButton } from "../ViewButton";
import { DeleteButton } from "../DeleteButton";

export function TeamInfo ({id, name, foundation}) {
   
    const {deleteTeam} = useTeam();
   
    return (
        <div class="border rounded-lg p-4 mb-4 shadow-md">
            <span class="text-lg font-bold">Nome: {name} </span>
            <div class="mt-2 flex gap-2">
              <DeleteButton handleClick={() => deleteTeam(id)}/>
              <ViewButton content={'Jogadores'}/>
            </div>
            <div class="mt-2 text-gray-700">
                <span>Fundação: {foundation} </span>
            </div>
        </div>
    )
}