import { useState } from "react"
import { TodoListModel } from "../model/TodoListModel"
import { addDoc, collection, doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"

type Props = {
  todoList: TodoListModel[]
  setTodoList: React.Dispatch<React.SetStateAction<TodoListModel[]>>
  uid?: string
}

const AddTodoList = ({todoList, setTodoList, uid} : Props) => {

  const [name, setName] = useState('')

  const handleAddTodoList = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const newTodoList : TodoListModel = {
        uid: uid,
        name: name
      }
      const docRef = await addDoc(collection(db, 'todo_list'), newTodoList)
      const added = await getDoc(doc(db, 'todo_list', docRef.id))
      const newList = {...added.data(), id: docRef.id}

      setTodoList([...todoList, newList])
      setName('')
    }
  }

  return (
    <>
      <h1>Add Todo List</h1>
      <input
        type='text'
        onKeyUp={handleAddTodoList}
        onChange={(e) => setName(e.target.value)}
        placeholder='Add new todo list'
        value={name}
      />
    </>
  )
}

export default AddTodoList