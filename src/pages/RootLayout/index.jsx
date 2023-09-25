import {Outlet } from "react-router-dom"
import { Aside } from "../../components/Aside"


// style={{backgroundColor: "white", height: "300px", display: 'grid', gridTemplateColumns: '200px 400px', gap:'2rem'}}
export function RootLayout () {
    return (
        <div className="flex bg-slate-50 p-3 rounded gap-5 w-2/3 shadow-xl">
            <Aside/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
  }