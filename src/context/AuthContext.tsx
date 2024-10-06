import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

type UserContextValue = {
  user: User | null
  isLoading: boolean
}

export const AuthContext = createContext<UserContextValue>({user: null, isLoading: true})

export const AuthContextProvider = ( {children} : any ) => {

  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setIsLoading(false)

      if (user) {
        console.log('User logged in.')
      }
    })

    return () => unsubscribe()
  }, [])

  return <AuthContext.Provider value={ {user, isLoading} }>
    { children }
  </AuthContext.Provider>
}

export const UserContext = () => {
  return useContext(AuthContext)
}