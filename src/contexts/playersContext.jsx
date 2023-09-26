/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { createRequest, deleteRequest, fetchRequest } from "../api/api";

const PlayerContext = createContext();

export function usePlayer() {
  return useContext(PlayerContext);
}

export function PlayerProvider({ children }) {
  const [players, setPlayers] = useState([]);

  async function createPlayer(name, age, position, team) {

    const data = {nome: name, idade: +age, position: position, timeId: team};
    try {
      const createdPlayer = await createRequest(data, 'jogador')
      console.log(createdPlayer);
      setPlayers((state) => {
        const newState = [createdPlayer, ...state];
        return newState;
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function deletePlayer(playerId) {
    try {
      await deleteRequest(`jogador/${playerId}`);
      setPlayers((state) => {
        const newState = state.filter(({ id }) => id !== playerId);
        return newState;
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchPlayers () {
    const players = await fetchRequest('jogadores');
    setPlayers(players);
  }

  return (
    <PlayerContext.Provider value={{ players, createPlayer, deletePlayer, fetchPlayers}}>
      {children}
    </PlayerContext.Provider>
  );
}
