import { Input } from "../../components/Input"
import { useState} from "react"
import { useChampionship } from "../../contexts/championshipContext";
import { useNavigate } from "react-router-dom";

export function FormCreateChampionship () {
    
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const {createChampionship} = useChampionship();
    const navigate = useNavigate();


    function submitForm (eve) {
        console.log('entrou')
            eve.preventDefault();
            createChampionship(name, startDate, endDate);
            return navigate('/');
    }    

    return (
        <div>
            <h1>Registrar campeonato</h1>
            <form onSubmit={submitForm}>
                <Input id={'name'} label={'Nome:'} type={'text'} value={name} handleChange={(ev) => setName(ev.currentTarget.value)}/>
                <Input id={'start-date'} label={'Data de início:'} type={'date'} value={startDate} handleChange={(ev) => setStartDate(ev.currentTarget.value)}/>
                <Input id={'end-date'} label={'Data de fim:'} type={'date'} value={endDate} handleChange={(ev) => setEndDate(ev.currentTarget.value)}/>
                <button>Enviar</button>
            </form>
        </div>
    )
}