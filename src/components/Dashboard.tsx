import { onAuthStateChanged, signOut, User } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const Dashboard = () => {

  const [currentUser, setCurrentUser] = useState<User | null>()

  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    })
  }

  useEffect(() => {
    auth.onAuthStateChanged((user : User | null) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <>
      <h1>Dashboard Page</h1>
      <h2>User</h2>
      { currentUser?.displayName }
      <button
        onClick={handleSignOut}>
        Sign out
      </button>
    </>
  )
}

export default Dashboard