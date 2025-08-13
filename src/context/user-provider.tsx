import { createContext, useContext, useState, type ReactNode } from "react";

interface User {
  id: string
  name: string
  email: string
}

interface UserContextType {
  user: User | null
  login: (userData: User) => void
  logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

interface UserProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'Bernardo Padilha',
    email: 'bernardoa.padilha@gmail.com'
  })

  function login(userData: User) {
    setUser(userData)
  }

  function logout() {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{
      user,
      login,
      logout,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
}