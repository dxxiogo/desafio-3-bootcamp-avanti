import { Outlet, useParams } from "react-router-dom"
import { usePlayer } from "../../contexts/playersContext";
import { useEffect } from "react";
import PlayerInfo from "../../components/PlayerInfo";

export function PlayersByTeam () {

    const {players, fetchPlayers} = usePlayer();
    const {teamId} = useParams();

    useEffect(() => {
        fetchPlayers();     
    }, [])
    
 
    
    const playersFound = players.filter(({timeId}) => teamId === timeId);

    if(playersFound.length === 0) 
        return <p>Não jogadores cadastrados associados a esse time</p>
    
    return (
        <div>
            <div>
                <h1 className="">Jogadores</h1>
                <div className="max-h-72 overflow-y-auto mt-8">
                    {playersFound.map(({id, nome, idade, position}) => (
                        <PlayerInfo key={id} name={nome} age={idade} position={position} id={id}/>
                    ))}
                </div>
                <Outlet/>
            </div>
        </div>
    )
}