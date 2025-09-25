import { useLocation } from "react-router-dom";

export function Profile(){
    const location = useLocation();
    const {user} = location.state || {};
    
    if (!user) return <p>Nenhum usuário encontrado!</p>;

    return(
        <div>
            <h1>Perfil do usuário</h1>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Telefone: {user.phone}</p>
        </div>
    )
}

