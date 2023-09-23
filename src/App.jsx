import { RouterProvider } from "react-router-dom"
import { router } from "./routes"

export function App () {
  <>
    <RouterProvider router={router}/>
  </>
}