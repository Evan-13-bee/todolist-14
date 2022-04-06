import axios from 'axios';
import { useEffect, useState } from 'react';
import { todolistsAPI, UpdateTaskModelType } from '../api/todolists-api';
export default {
   title: 'API'
}

const settings = {
   withCredentials: true,
   headers: {
      'API-KEY': '042d7524-faa2-4457-aa90-bf3325f215f7'
   }
}
export const GetTodolists = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      todolistsAPI.getTodolists()
         .then((res) => {
            setState(res.data);
         })

   }, [])

   return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      todolistsAPI.createTodolist("Korleone").then((res) => {
         setState(res.data);
      })

   }, [])

   return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      const todolistId = '4cd0e39b-44b1-4a42-9b20-04901b88e6c3';
      todolistsAPI.deleteTodolist(todolistId).then((res) => {
         setState(res.data);
      })

   }, [])

   return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      const todolistId = '32d90b37-727d-40c1-9a50-9cdeead16a1a'
      todolistsAPI.updateTodolist(todolistId, 'Im alive')
         .then((res) => {
            setState(res.data)
         })

   }, [])

   return <div> {JSON.stringify(state)}</div>
}


//человек сын человеческий
export const GetTasks = () => {
   const [state, setState] = useState<any>(null)
   const todolistId = '32d90b37-727d-40c1-9a50-9cdeead16a1a'
   useEffect(() => {
      todolistsAPI.getTasks(todolistId)
         .then((res) => {
            setState(res.data);
         })

   }, [])

   return <div> {JSON.stringify(state)}</div>
}
export const CreateTask = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      const todolistId = '32d90b37-727d-40c1-9a50-9cdeead16a1a'
      const title = 'Frostiha'
      todolistsAPI.createTask(todolistId, title)
         .then((res) => {
            setState(res.data)
         })

   }, [])

   return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      const todolistId = '4cd0e39b-44b1-4a42-9b20-04901b88e6c3';
      const taskId = '';
      todolistsAPI.deleteTask(todolistId, taskId).then((res) => {
         setState(res.data);
      })

   }, [])

   return <div> {JSON.stringify(state)}</div>
}
export const UpdateTask = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      const todolistId = '32d90b37-727d-40c1-9a50-9cdeead16a1a'
      const taskId = '4e7d135a-2714-4454-ae24-820fc2a0a3f3';
      const task: UpdateTaskModelType = {
         title: 'Frostiha',
         description: '',
         status: 0,
         priority: 1,
         startDate: '',
         deadline: '',
      }
      todolistsAPI.updateTask(todolistId, taskId, task)
         .then((res) => {
            setState(res.data)
         })

   }, [])

   return <div> {JSON.stringify(state)}</div>
}
