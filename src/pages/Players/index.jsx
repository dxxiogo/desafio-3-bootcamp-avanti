import { useEffect, useState } from "react";
import PlayerInfo from "../../components/PlayerInfo"
import { usePlayer } from "../../contexts/playersContext"


export function Players () {

    const {players, fetchPlayers} = usePlayer();
    const [searchTerm, setSearchTerm] = useState("");

   useEffect(() => {
        fetchPlayers();
   }, []);

   const filteredPlayers = players.filter(({ nome }) =>
    nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Jogadores</h1>
                <input 
                    type="text" 
                    placeholder="Digite um jogador"
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="max-h-72 overflow-y-auto mt-8">
                {players.map(({id, nome, idade, position}) => (
                    <PlayerInfo key={id} name={nome} age={idade} position={position} id={id}/>
                ))}
            </div>
        </div>
    )
}
