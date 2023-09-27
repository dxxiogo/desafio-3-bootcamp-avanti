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
            <h1 className="text-2xl font-bold">Times:</h1>
            <div>
                <div className="max-h-72 overflow-y-auto mt-6">
                    {teams.length !== 0 ? teams.map(({id, nome, fundacao}) => (
                        <TeamInfo key={id} name={nome} foundation={fundacao} id={id}/>
                    )) : 'Ainda não há times registrados'}
                </div>
            </div>
        </div>
    )
}