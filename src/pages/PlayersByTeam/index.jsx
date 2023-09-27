import { Outlet, useParams } from "react-router-dom"
import { usePlayer } from "../../contexts/playersContext";
import { useEffect } from "react";
import PlayerInfo from "../../components/PlayerInfo";
import { useTeam } from "../../contexts/teamsContext";

export function PlayersByTeam () {

    const {players, fetchPlayers} = usePlayer();
    const {teams} = useTeam();
    const {teamId} = useParams();

    
    useEffect(() => {
        fetchPlayers(); 
    }, [])
    
    
    function getTeamName(teamId) {
        const team = teams.find(({id}) => id === teamId);
        return team.nome
    }
    
    const playersFound = players.filter(({timeId}) => teamId === timeId);

    if(playersFound.length === 0) 
        return <p>Não jogadores cadastrados associados a esse time</p>
    
    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold" >Jogadores do {getTeamName(teamId)}</h1>
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