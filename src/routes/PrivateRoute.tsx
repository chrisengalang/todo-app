import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../context/AuthContext"

const PrivateRoute = () => {
  const { user, isLoading } = UserContext()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return user ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRoute