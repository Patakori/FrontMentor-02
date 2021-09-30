import Botao from "../components/Botao"
import Card from "../components/Card"
import { iconLuxury, iconSedans, iconSuvs } from "../components/Icons"

export default function home(){
  return(
    <div className="flex flex-col h-auto desk:flex-row desk:w-screen desk:h-screen">
      <div className="bg-bOrange flex flex-col h-500px pl-16 rounded-t-lg desk:h-full desk:w-full desk:rounded-none desk:rounded-l-lg">
      <span className="pb-14 pt-12 desk:pt-24 desk:pb-16"> {iconSedans} </span>
      <Card 
        titulo="SEDANS"
        texto="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
        or on your next road trip." 
      />
      <Botao 
        tColor="bOrange"
        bgColor="bOrange"
        />
      </div>
      <div className="bg-dCyan flex flex-col h-500px pl-16 desk:h-full desk:w-full">
        <span className="pb-14 pt-12 desk:pt-24 desk:pb-16"> {iconSuvs} </span>
        <Card 
        titulo="SUVs"
        texto="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
        and off-road adventures." 
        />
        <Botao 
        tColor="dCyan"
        bgColor="dCyan"
        />
      </div>
      <div className="bg-vDarkCyan flex flex-col h-500px pl-16 rounded-b-lg desk:h-full desk:w-full desk:rounded-none desk:rounded-r-lg">
        <span className="pb-14 pt-12 desk:pt-24 desk:pb-16"> {iconLuxury} </span>
        <Card 
        titulo="LUXURY"
        texto="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
        rental and arrive in style."
        />
        <Botao 
        tColor="vDarkCyan"
        bgColor="vDarkCyan"
        />
      </div>
    </div>
  )
}

