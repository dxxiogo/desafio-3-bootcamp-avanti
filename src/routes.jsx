import {createBrowserRouter} from 'react-router-dom';
import { FormCreateTeam } from './pages/FormCreateTeam';
import { FormCreatePlayer } from './pages/FormCreatePlayer';
import { FormCreateChampionship } from './pages/FormCreateChampionship';
import { Championships } from './pages/Championships';
import { RootLayout } from './pages/RootLayout';
import { Players } from './pages/Players';
import { Teams } from './pages/Teams';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index:true,
                element: <Championships/>
            }, 
            {
                path: '/teams',
                element: <Teams/>,
            }, 
            {
                path: '/players',
                element: <Players/>
            },
            {
                path:'/createChampionship',
                element: <FormCreateChampionship/>
            },
            {
                path:'/createPlayer',
                element: <FormCreatePlayer/>
            },
            {
                path:'/createTeam',
                element: <FormCreateTeam/>
            }
        ]
    }
])