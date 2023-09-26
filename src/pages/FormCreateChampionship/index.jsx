import React, { useState } from 'react';
import { Input} from '../../components/Input';
import { useChampionship } from '../../contexts/championshipContext';
import { useNavigate } from 'react-router-dom';

export function FormCreateChampionship() {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const { createChampionship } = useChampionship();
  const navigate = useNavigate();

  function submitForm(eve) {
    eve.preventDefault();
    createChampionship(name, startDate, endDate);
    return navigate('/');
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Registrar Campeonato</h1>
      <form onSubmit={submitForm}>
        <Input
          id="name"
          label="Nome:"
          type="text"
          value={name}
          handleChange={(ev) => setName(ev.currentTarget.value)}
        />
        <Input
          id="start-date"
          label="Data de Início:"
          type="date"
          value={startDate}
          handleChange={(ev) => setStartDate(ev.currentTarget.value)}
        />
        <Input
          id="end-date"
          label="Data de Fim:"
          type="date"
          value={endDate}
          handleChange={(ev) => setEndDate(ev.currentTarget.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">
          Enviar
        </button>
      </form>
    </div>
  );
}
