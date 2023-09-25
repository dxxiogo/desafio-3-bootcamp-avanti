import { Link } from "react-router-dom"

export function Aside () {
    return (
        <aside>
            <nav>
                <ul style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <Link to={'/'}>Campeonatos</Link>
                    <Link to={'players'}>Jogadores</Link>
                    <Link to={'teams'}>Times</Link>
                    <hr />
                    <Link to={'createChampionship'}>Adicionar Campeonato</Link>
                    <Link to={'createTeam'}>Adicionar Time</Link>
                    <Link to={'createPlayer'}>Adicionar Jogador</Link>     
                </ul>
            </nav>
        </aside>
    )
}