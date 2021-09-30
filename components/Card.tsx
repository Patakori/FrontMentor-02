import Texto from "./Texto"
import Titulo from "./Titulo"

interface propsCard{
    titulo: string
    texto: string
}

export default function Card(props){
    return(
        <div>
            <div>
                <Titulo titulo={props.titulo} />
            </div>
            <div className="pt-11 desk:pt-12" >
                <Texto texto={props.texto} />
            </div>                               
        </div>
    )
}