import { useEffect } from "react";
import ChampionshipInfo from "../../components/ChampionshipInfo"
import { useChampionship } from "../../contexts/championshipContext"

export function Championships () {

    const {championships, fetchChampionships} = useChampionship();

    useEffect( () => {
        fetchChampionships();
    }, [])

    return (
        <div>
            <h1>Campeonatos:</h1>
            <div className="max-h-60 overflow-y-auto mt-8">
                {championships.map(({ id, nome, dataInicio, dataFim }) => (
                <ChampionshipInfo key={id} name={nome} endDate={dataFim} startDate={dataInicio} id={id} />
                ))}
            </div>
        </div>
    )
}