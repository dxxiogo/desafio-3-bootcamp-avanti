import React, { useState } from 'react';
import { Input } from '../../components/Input';
import { useTeam } from '../../contexts/teamsContext';
import { useNavigate } from 'react-router-dom';

export function FormCreateTeam() {
  const [name, setName] = useState('');
  const [foundation, setFoundation] = useState('');

  const { createTeam } = useTeam();
  const navigate = useNavigate();

  function submitForm(ev) {
    ev.preventDefault();
    createTeam(name, foundation);
    return navigate('/teams');
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Registrar Time</h1>
      <form onSubmit={submitForm}>
        <Input
          id="name"
          label="Nome:"
          type="text"
          value={name}
          handleChange={(ev) => setName(ev.target.value)}
        />
        <Input
          id="foundation"
          label="Fundação:"
          type="date"
          value={foundation}
          handleChange={(eve) => setFoundation(eve.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">
          Enviar
        </button>
      </form>
    </div>
  );
}
