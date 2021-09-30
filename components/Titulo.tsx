interface propsTitulo{
    titulo: string
}

export default function Titulo(props: propsTitulo) {
    return (
        <div>
            <h1 className="font-BigShouldersDisplay text-5xl font-bold text-vLightGray desk:text-7xl desk:pt-6"> {props.titulo} </h1>
        </div>
    )
}