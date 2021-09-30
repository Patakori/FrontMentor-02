export default function Botao(props){
    return (
       <div className="pt-11 desk:pt-40 "> 
           <button className= {` bg-vLightGray w-44 h-14 rounded-30px text-${props.tColor} 
           desk:w-56 desk:h-20 desk:rounded-50px desk:text-2xl desk:hover:bg-${props.bgColor} 
           desk:hover:border-white desk:border-4 desk:hover:text-tWhite`}> Learn More </button>
        </div>
    )
}