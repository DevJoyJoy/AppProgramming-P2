import {useParams } from 'react-router-dom'

export const Adms = () => {
    const { id } = useParams();
    const users = [2, 3, 4, 5, 6, 7, 8, 9, 10]
    let found = false
    if (id == 1){
        found = true
        return(
            <h1>Bem-vindo ADM!</h1>
        )
    } else {
        for (let i = 0; i < users.length; i ++){
            if (users[i] == id){
                found = true
                return(
                    <h1>Bem-vindo usuário {id}!</h1>
                )
            }
            
        }
    }
    
    if (found == false){
        return(
            <h1>Usuário {id} não encontrado!</h1>
        )
    }
}