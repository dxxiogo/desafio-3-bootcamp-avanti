import { usePlayer } from "../../contexts/playersContext"
import { ViewButton } from "../ViewButton";
import { DeleteButton } from "../DeleteButton";

export default function PlayerInfo ({id, name, age, position}) {
    const {deletePlayer} = usePlayer();

    return (
        <div className="border rounded-lg p-4 mb-4 shadow-md w-[600px]">
            <span className="text-lg font-bold">Nome: {name}</span>
            <div className="mt-2 flex gap-2">
                <DeleteButton handleClick={() => deletePlayer(id)}/>
                <ViewButton content="Time"/>
            </div>
            <div className="mt-2 flex flex-col">
                <span>Idade: {age} </span>
                <span>Posição: {position} </span>
            </div>
        </div>
    )
}