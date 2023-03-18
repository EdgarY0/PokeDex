import './PokeCard.css'

export default ({poke})=> {

    console.log()
    const tipoCor = {
        "normal": "#e4d5b7",
        "fire": "#fc5603"
    }

    const estilo = {
        borderColor: tipoCor[poke.types[0].type.name],
        
    }

    return(
        <div className="PokeCard" style={estilo}> 
            <h1 >{poke.name}</h1>
            <img src={poke.sprites.front_default} alt={`Sprite do ${poke.nome}`} />
        </div>
    )
}