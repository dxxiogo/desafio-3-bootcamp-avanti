import { useEffect } from "react";
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
            <h1 className="">Jogadores</h1>
            <div className="max-h-72 overflow-y-auto mt-8">
                {players.map(({id, nome, idade, position}) => (
                    <PlayerInfo key={id} name={nome} age={idade} position={position} id={id}/>
                ))}
            </div>
        </div>
    )
}
