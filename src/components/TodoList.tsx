import { TodoModel } from "../model/TodoModel"

type Props = {
  id?: string
  uid?: string
  name?: string
  todos?: TodoModel[]
}

const TodoList = ({id, uid, name, todos} : Props) => {

  return (
    <>
      <h1>{id} {name}</h1>
    </>
  )
}

export default TodoList