import { useTeam } from "../../contexts/teamsContext"
import { ViewButton } from "../ViewButton";
import { DeleteButton } from "../DeleteButton";
import { Link } from "react-router-dom";

export function TeamInfo ({id, name, foundation}) {
   
    const {deleteTeam} = useTeam();
   
    return (
        <div className="border rounded-lg p-4 mb-4 shadow-md w-[550px]">
            <span className="text-lg font-bold">Nome: {name} </span>
            <div className="mt-2 flex gap-2">
              <DeleteButton handleClick={() => deleteTeam(id)}/>
              <Link to={`/playersByTeam/${id}`} ><ViewButton content={'Jogadores'}/></Link>
            </div>
            <div className="mt-2 text-gray-700">
                <span>Fundação: {foundation} </span>
            </div>
        </div>
    )
}