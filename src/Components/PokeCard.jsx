import './PokeCard.css'

export default ({poke})=> {

    var tipodopokemon = poke.types[0].type.name

    console.log()
    const tipoCor = {
        "normal": "#e4d5b7",
        "fire": "#ff0000",
        "grass": "#0F0",
        "water": "#0FF0FF",
        "bug": "#23FF90",
        "fighting": "#fac000",
        "psychic": "#9a00fa",
        "ground": "#6b2b01",
        "fairy": "#f93dff",
        "electric": "#ffea00",
        "dark": "#000000",
        "rock": "#4f4f4f",
        "ghost": "#6d54f7",
        "ice": "#00e1ff",
        "dragon": "#2bff00",
        "steel": "#a3a3a3",
        "dragon": "#fc5603",
        "flying": "#ff0099",
    }   

    const estilo = {
        borderColor: tipoCor[poke.types[0].type.name],
        
    }

    return(
        <div className="PokeCard" style={estilo}> 
            <h2>{poke.name}</h2>
            <h3>{tipodopokemon}</h3>
            <img src={poke.sprites.front_default} alt={`Sprite do ${poke.nome}`} />
            
        </div>
    )
}