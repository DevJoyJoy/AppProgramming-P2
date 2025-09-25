import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function List() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate();

  const openUserPf = (user) => {
    navigate('/profile', {state: {user}})
  }
  
  const getUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(response.data)
  }

  useEffect(() => {
    getUsers();
  }, [])



  return (
    <>
    <h1 className=' '>Selecione seu perfil</h1>
    <ul style={{listStyle:"none"}}>
        {users.map((user) => (
            <li
                key={user.id}
                onClick={() => openUserPf(user)}
                style={{cursor:"pointer", marginBottom: "8px"}}
            >
                {user.id} - {user.name}
            </li>
        ))}
    </ul>
    </>
  )
}