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
            <h1 className="text-2xl font-bold">Campeonatos:</h1>
            <div className="max-h-72 overflow-y-auto mt-6">
                {championships.length !== 0 ? championships.map(({ id, nome, dataInicio, dataFim }) => (
                <ChampionshipInfo key={id} name={nome} endDate={dataFim} startDate={dataInicio} id={id} />
                )) : 'Ainda não há campeonatos registrados'}
            </div>
        </div>
    )
}