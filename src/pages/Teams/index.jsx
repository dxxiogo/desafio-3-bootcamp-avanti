import { useEffect } from "react";
import {TeamInfo} from "../../components/TeamInfo"
import { useTeam } from "../../contexts/teamsContext"

export function Teams () {

    const {teams, fetchTeams} = useTeam();

    useEffect(() => {
        fetchTeams();
    }, [])
    return (
        <div>
            <h1>Times:</h1>
            <div>
                <div className="max-h-48 overflow-y-auto mt-8">
                    {teams.map(({id, nome, fundacao}) => (
                        <TeamInfo key={id} name={nome} foundation={fundacao} id={id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}