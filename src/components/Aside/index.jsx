import { Link } from "react-router-dom"

export function Aside () {
    return (
        <aside>
            <nav>
                <ul style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <Link to={'/'} className="hover:bg-gray-100 p-1">Campeonatos</Link>
                    <Link to={'players'} className="hover:bg-gray-100 p-1" >Jogadores</Link>
                    <Link to={'teams'} className="hover:bg-gray-100 p-1">Times</Link>
                    <hr />
                    <Link to={'createChampionship'} className="hover:bg-gray-100 p-1">Adicionar Campeonato</Link>
                    <Link to={'createTeam'} className="hover:bg-gray-100 p-1">Adicionar Time</Link>
                    <Link to={'createPlayer'} className="hover:bg-gray-100 p-1">Adicionar Jogador</Link>     
                </ul>
            </nav>
        </aside>
    )
}