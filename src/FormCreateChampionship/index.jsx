import { Input } from "../Input"
import { useState } from "react"

export function FormCreateChampionship () {
    
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
        <div>
            <form action="">
                <Input id={'name'} label={'Nome:'} type={'text'} value={name} handleChange={setName}/>
                <Input id={'start-date'} label={'Data de início:'} type={'date'} value={startDate} handleChange={setStartDate}/>
                <Input id={'end-date'} label={'Data de fim:'} type={'date'} value={endDate} handleChange={setEndDate}/>
                <button>Enviar</button>
            </form>
        </div>
    )
}