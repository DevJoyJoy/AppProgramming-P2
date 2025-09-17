import { useNavigate } from "react-router-dom"

export const About = () =>{
    const navigate = useNavigate();

    const handleNavigate = () =>
    {
        navigate('/')
    }
    return(
        <>
            <h1>Componente About</h1>
            <button onClick={handleNavigate}>Clique para Home</button>
        </>
    )
}