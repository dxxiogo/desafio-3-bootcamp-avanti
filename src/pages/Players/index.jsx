import React, { useEffect, useState } from "react";
import PlayerInfo from "../../components/PlayerInfo";
import { usePlayer } from "../../contexts/playersContext";

export function Players() {
  const { players, fetchPlayers } = usePlayer();
  const [searchPlayer, setSearchPlayer] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState(players);

  useEffect(() => {
    fetchPlayers();
  }, []);

  function filterPlayers(value) {
    setSearchPlayer(value); 
    setFilteredPlayers((state) => {
      return players.filter(({ nome }) =>
        nome.toUpperCase().includes(value.toUpperCase())
      );
    });
  }

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Jogadores</h1>
        <input
          value={searchPlayer}
          onChange={(ev) => filterPlayers(ev.target.value)}
          type="text"
          placeholder="Digite um jogador"
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="max-h-72 overflow-y-auto mt-8">
        { filteredPlayers.map(({ id, nome, idade, position }) => (
          <PlayerInfo key={id} name={nome} age={idade} position={position} id={id} />
        ))}
      </div>
    </div>
  );
}
