import { Input } from "../../components/Input"
import { useState } from "react"
import { usePlayer } from "../../contexts/playersContext";
import { useNavigate } from "react-router-dom";
import { Select } from "../../components/Select";
import {useTeam} from "../../contexts/teamsContext"

export function FormCreatePlayer () {
    
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [position, setPosition] = useState('');
    const [team, setTeam] = useState('');

    const {createPlayer} = usePlayer();
    const {teams} = useTeam();

    function submitForm (ev) {
        ev.preventDefault();
        createPlayer(name, age, position, team)
        return navigate('/players')
    }

    return (
        <div>
            <h1>Registrar jogador</h1>
            <form onSubmit={submitForm}>
                <Input id={'name'} label={'Nome:'} type={'text'} value={name} handleChange={(eve) => setName(eve.target.value)}/>
                <Input id={'age'} label={'Idade:'} type={'number'} value={age} handleChange={(eve) => setAge(eve.target.value)}/>
                <Input id={'position'} label={'Posição:'} type={'text'} value={position} handleChange={(eve) => setPosition(eve.target.value)}/>
                 <Select id={'team'} options={teams} handleChange={(eve) => setTeam(eve.target.value)} value={team}/>
                <button>Enviar</button>
            </form>
        </div>
    )
}