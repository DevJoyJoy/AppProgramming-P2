import { useParams } from "react-router-dom"

export const TwoParams = () => {
    const {category} = useParams();
    const {prod} = useParams();

    return(
        <>
            <h1>Categoria {category}</h1>
            <h1>Produto {prod}</h1>
        </>
    )
}