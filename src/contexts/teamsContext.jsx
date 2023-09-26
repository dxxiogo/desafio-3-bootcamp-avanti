import { createContext, useContext, useState } from "react";
import { createRequest, deleteRequest, fetchRequest } from "../api/api";

const TeamContext = createContext();

export function useTeam() {
  return useContext(TeamContext);
}

export function TeamProvider({ children }) {
  const [teams, setTeams] = useState([]);

  async function createTeam(name, foundation) {
    const data = {nome: name, fundacao: new Date(foundation)};
    try {
      const teamCreated = await createRequest(data, 'time');
      console.log(teamCreated)
      setTeams((state) => {
        const newState = [ teamCreated, ...state];
        return newState;
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteTeam(teamId) {
    try {
      await deleteRequest(`time/${teamId}`);
      setTeams((state) => {
        const newState = state.filter(({ id }) => id !== teamId);
        return newState;
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchTeams () {
    try {
      const teams = await fetchRequest('times')
      setTeams(teams);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <TeamContext.Provider value={{ teams, createTeam, deleteTeam, fetchTeams }}>
      {children}
    </TeamContext.Provider>
  );
}
