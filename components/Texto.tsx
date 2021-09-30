interface propsTexto{
    texto:string
}

export default function Texto(props: propsTexto){
    return(
        <div>
            <p className="font-LexendDeca text-15px font-normal text-tWhite w-56 desk:w-80 desk:text-25px"> {props.texto} </p>
        </div>
    ) 
}