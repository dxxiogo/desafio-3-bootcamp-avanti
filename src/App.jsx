import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import './App.css'
import { ChampionshipProvider } from "./contexts/championshipContext"
import { PlayerProvider } from "./contexts/playersContext"
import { TeamProvider } from "./contexts/teamsContext"

export default function App () {
  return (
    <div className="main">
      <ChampionshipProvider>
        <TeamProvider>
          <PlayerProvider>
            <RouterProvider router={router}/>
          </PlayerProvider>
        </TeamProvider>
      </ChampionshipProvider>,
    </div>
  )
}