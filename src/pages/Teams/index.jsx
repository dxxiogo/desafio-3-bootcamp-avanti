import { useEffect } from "react";
import {TeamInfo} from "../../components/TeamInfo"
import { useTeam } from "../../contexts/teamsContext"

export function Teams () {

    const {teams, fetchTeams} = useTeam();

    useEffect(() => {
        fetchTeams();
    }, [])
    return (
        <div className=" p-6 mr-2">
            <h1>Times:</h1>
            <div>
                <div className="max-h-72 overflow-y-auto mt-8">
                    {teams.map(({id, nome, fundacao}) => (
                        <TeamInfo key={id} name={nome} foundation={fundacao} id={id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}