import {Outlet } from "react-router-dom"
import { Aside } from "../../components/Aside"


// style={{backgroundColor: "white", height: "300px", display: 'grid', gridTemplateColumns: '200px 400px', gap:'2rem'}}
export function RootLayout () {
    return (
        <div className="flex bg-slate-50 p-3 rounded gap-5 shadow-xl">
            <Aside/>
            <main className="w-[50vw] ">
                <Outlet/>
            </main>
        </div>
    )
  }