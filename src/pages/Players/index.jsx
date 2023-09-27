import { useEffect } from "react";
import PlayerInfo from "../../components/PlayerInfo"
import { usePlayer } from "../../contexts/playersContext"


export function Players () {

    const {players, fetchPlayers} = usePlayer();

   useEffect(() => {
        fetchPlayers();
   }, []);

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Jogadores:</h1>
                <input type="text"  className=" shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="max-h-72 overflow-y-auto mt-6">
                {players.length !== 0 ? players.map(({id, nome, idade, position}) => (
                    <PlayerInfo key={id} name={nome} age={idade} position={position} id={id}/>
                )): 'Ainda não há jogadores registrados'}
            </div>
        </div>
    )
}