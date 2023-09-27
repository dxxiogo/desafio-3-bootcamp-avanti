import React, { useState } from 'react';
import Select from '../../components/Select';
import TeamInfo from '../../components/TeamInfo';

const availableTeams = ['vasco', 'sao paulo', 'barcelona'];

export function TeamByChampionship ({name}) {
     
    const [selectedTeam, setSelectedTeam] = useState('');
    const [addedTeams, setAddedTeams] = useState([]);
  
    const handleSelectChange = (event) => {
      setSelectedTeam(event.target.value);
    };
  
    const handleAddTeam = () => {
      if (selectedTeam && !addedTeams.includes(selectedTeam)) {
        setAddedTeams([...addedTeams, selectedTeam]);
      }
    };
  
    return (
      <div>
        <h1>Campeonato</h1>
        <div>
          <h2>Times Disponíveis</h2>
          <Select
            options={availableTeams}
            selectedValue={selectedTeam}
            onChange={handleSelectChange}
          />
          <button onClick={handleAddTeam}>Adicionar Time</button>
        </div>
        <div>
          {addedTeams.map((team) => (
            <TeamInfo key={team} team={team} />
          ))}
        </div>
      </div>
    );
  }
  
  export default App;
  