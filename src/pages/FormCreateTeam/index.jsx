import { Input } from "../../components/Input"
import { useState } from "react"
import { useTeam } from "../../contexts/teamsContext";
import { useNavigate } from "react-router-dom";

export function FormCreateTeam () {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [foundation, setFoundation] = useState('');

    const {createTeam} = useTeam(); 

    function submitForm(ev) {
        ev.preventDefault();
        createTeam(name, foundation);
        return navigate('/teams')
    }

    return (
        <div>
            <h1>Resgistrar time</h1>
            <form onSubmit={submitForm}>
                <Input id={'name'} label={'Nome:'} type={'text'} value={name} handleChange={(ev) => setName(ev.target.value)}/>
                <Input id={'foundation'} label={'Fundação:'} type={'text'} value={foundation} handleChange={(eve) => setFoundation(eve.target.value)}/>
                <button>Enviar</button>
            </form>
        </div>
    )
}