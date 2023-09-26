import { Link, useLocation } from "react-router-dom"

export function Aside () {

    const {pathname} = useLocation();

    return (
        <aside>
            <nav>
                <ul style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <Link 
                        to={'/'} 
                        className={`${pathname === "/" ? "bg-blue-500 text-white" : "hover:bg-gray-100"} rounded px-1 py-2`}
                        >Campeonatos
                    </Link>
                    <Link 
                        to={'players'} 
                        className={`${pathname === "/players" ? "bg-blue-500 text-white" : "hover:bg-gray-100"} rounded px-1 py-2`} 
                        >Jogadores
                    </Link>
                    <Link 
                        to={'teams'} 
                        className={`${pathname === "/teams" ? "bg-blue-500 text-white" : "hover:bg-gray-100"} rounded px-1 py-2`}
                        >Times
                    </Link>
                    <hr />
                    <Link 
                        to={'createChampionship'} 
                        className={`${pathname === "/createChampionship" ? "bg-blue-500 text-white" : "hover:bg-gray-100"} rounded px-1 py-2`}
                        >Adicionar Campeonato
                    </Link>
                    <Link 
                        to={'createTeam'} 
                        className={`${pathname === "/createTeam" ? "bg-blue-500 text-white" : "hover:bg-gray-100"} rounded px-1 py-2`}
                        >Adicionar Time
                    </Link>
                    <Link 
                        to={'createPlayer'} 
                        className={`${pathname === "/createPlayer" ? "bg-blue-500 text-white" : "hover:bg-gray-100"} rounded px-1 py-2`}
                        >Adicionar Jogador
                    </Link>     
                </ul>
            </nav>
        </aside>
    )
}