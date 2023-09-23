import {createBrowserRouter} from 'react-router-dom';

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
                children: [
                    {
                        path: '/players',
                        element: <Players/>
                    }
                ]
            }, 
            {
                path:'/createChampionship',
                element: <CreateChampionship/>
            },
            {
                path:'/createPlayer',
                element: <CreateChampionship/>
            },
            {
                path:'/createTeam',
                element: <CreateChampionship/>
            }
        ]
    }
])