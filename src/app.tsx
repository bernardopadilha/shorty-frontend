import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { UserProvider } from "./context/user-provider"
import { ThemeProvider } from "./context/theme-provider"

export function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ThemeProvider>
  )
}
