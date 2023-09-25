import { createContext, useContext, useState } from "react";
import { createRequest, deleteRequest, fetchRequest } from "../api/api";

const ChampionshipContext = createContext();

export function useChampionship() {
  return useContext(ChampionshipContext);
}

export function ChampionshipProvider({ children }) {
  const [championships, setChampionships] = useState([]);

 async function createChampionship(name, startDate, endDate) {
    try {
      const createdChamp = await createRequest({nome: name, dataInicio: new Date(startDate), dataFim: new Date(endDate)}, 'campeonato');
      setChampionships((state) => {
        const newState = [createdChamp, ...state];
        return newState;
      });
    } catch (err) {
      console.log(err)
    }
  }

  async function deleteChampionship(champId) {
    try {
      await deleteRequest(`campeonato/${champId}`);
      setChampionships((state) => {
        const newState = state.filter(({ id }) => id !== champId);
        return newState;
      });
    } catch (err) {
      console.log(err);
    }
  }
  


async function fetchChampionships () {
    const championships = await fetchRequest('campeonatos')
    setChampionships(championships);
}

  return (
    <ChampionshipContext.Provider value={{ championships, createChampionship, deleteChampionship, fetchChampionships}}>
      {children}
    </ChampionshipContext.Provider>
  );
}
