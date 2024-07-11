interface Cartão{
    id: number
    texto: string
    detalhes : string
}

export const Card = ({id , texto , detalhes } : Cartão) =>{
    return(
    <div>
        <h1>Cartão de numero {id}</h1>
        <p>{texto}</p>
        <p>{detalhes}</p>
    </div>
    )
}
