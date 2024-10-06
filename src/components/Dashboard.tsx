import { signOut, User } from "firebase/auth"
import { auth, db } from "../firebase"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import TodoList from "./TodoList"
import { TodoListModel } from "../model/TodoListModel"
import { collection, getDocs, query, where } from "firebase/firestore"
import AddTodoList from "./AddTodoList"
import { UserContext } from "../context/AuthContext"

const Dashboard = () => {

  const [todoList, setTodoList] = useState<TodoListModel[]>([])
  const { user } = UserContext()

  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    })
  }

  const getTodoList = async () => {
    const q = query(collection(db, 'todo_list'), where('uid', '==', user?.uid));
    return await getDocs(q).then(snapshot => snapshot)
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {user?.displayName}</h2>
      <button
        onClick={handleSignOut}>
        Sign out
      </button>
      {
        todoList.map(todo => { return <TodoList key={todo.id} id={todo.id} uid={todo.uid} name={todo.name} todos={todo.todos} /> })
      }
      <AddTodoList todoList={todoList} setTodoList={setTodoList} uid={user?.uid} />
    </div>
  )
}

export default Dashboard