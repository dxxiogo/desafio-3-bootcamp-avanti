import React, { useEffect, useState } from 'react';
import {Select} from '../../components/Select';
import {TeamInfo} from '../../components/TeamInfo';
import { useTeam } from '../../contexts/teamsContext';
import { useChampionship } from '../../contexts/championshipContext';
import { useParams } from 'react-router-dom';


export function TeamByChampionship () {
     
    const {champId} = useParams();
    
    const [teamSelected, setTeamSelected] = useState('');
    const {teamsByChamp, fetchTeamsByChampionship,  addTeamToChampionship} = useChampionship()
    const {teams, fetchTeams} = useTeam();
    const {championships} = useChampionship();

    useEffect(() => {
      fetchTeamsByChampionship(champId);
      fetchTeams();
    }, [])
  
    const teamIdsFromChampionshipsTeams = new Set(teamsByChamp.map(item => item.idTime));

    const teamsInChampionships = teams.filter(team => teamIdsFromChampionshipsTeams.has(team.id));

    function getChampionshipName (champId) {
        const championship = championships.find(({id}) => champId === id);
        return championship.nome
    }
  
    return (
      <div>
        <h1 className="text-2xl font-bold">{getChampionshipName(champId)}</h1>
          <div className='flex align-center gap-3 mt-3'>
            <Select
              options={teams}
              value={teamSelected}
              label="Times disponíveis:"
              handleChange={(ev) => setTeamSelected(ev.target.value)}
              />
            <button 
              className='px-4 py-1 bg-blue-500 h-9 text-white rounded-md hover:bg-blue-600 mt-7'
              onClick={() => addTeamToChampionship({teamId: teamSelected, championshipId: champId})}>
                Adicionar</button>
          </div>
        <div>
          <h2>Times:</h2>
          <div className="max-h-72 overflow-y-auto mt-6">
            {teamsInChampionships.map(({id, nome, fundacao}) => (
              <TeamInfo key={id} id={id} name={nome} foundation={fundacao}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
  