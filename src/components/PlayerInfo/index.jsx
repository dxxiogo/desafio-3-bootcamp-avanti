import { usePlayer } from "../../contexts/playersContext"
import { ViewButton } from "../ViewButton";
import { DeleteButton } from "../DeleteButton";

export default function PlayerInfo ({id, name, age, position}) {

    const {deletePlayer} = usePlayer();

    return (
        <div class="border rounded-lg p-4 mb-4 shadow-md">
            <DeleteButton handleClick={() => deletePlayer(id)}/>
            <ViewButton content="Visualizar time"/>
            <div>
                <span>Nome: {name}</span>
                <span>Idade: {age} </span>
                <span>Posição: {position} </span>
            </div>
        </div>
    )
}