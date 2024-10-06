import { TodoModel } from "./TodoModel"

export interface TodoListModel {
    id?: string
    uid?: string
    name?: string
    todos?: TodoModel[]
}