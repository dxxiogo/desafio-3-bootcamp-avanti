import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { usePlayer } from '../../contexts/playersContext';
import { useNavigate } from 'react-router-dom';
import { Select } from '../../components/Select';
import { useTeam } from '../../contexts/teamsContext';

export function FormCreatePlayer() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');
  const [team, setTeam] = useState('');

  const { createPlayer } = usePlayer();
  const { teams, fetchTeams } = useTeam();

  useEffect(() => {
    fetchTeams();
    console.log(teams)
  }, [])

  function submitForm(ev) {
    ev.preventDefault();
    createPlayer(name, age, position, team);
    return navigate('/players');
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Registrar Jogador</h1>
      <form onSubmit={submitForm}>
        <Input
          id="name"
          label="Nome:"
          type="text"
          value={name}
          handleChange={(eve) => setName(eve.target.value)}
        />
        <Input
          id="age"
          label="Idade:"
          type="number"
          value={age}
          handleChange={(eve) => setAge(eve.target.value)}
        />
        <Input
          id="position"
          label="Posição:"
          type="text"
          value={position}
          handleChange={(eve) => setPosition(eve.target.value)}
        />
        <Select
          id="team"
          label="Time:"
          options={teams}
          value={team}
          handleChange={(eve) => setTeam(eve.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">
          Enviar
        </button>
      </form>
    </div>
  );
}
