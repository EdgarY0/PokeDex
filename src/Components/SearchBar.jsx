export default ({setPoke})=> {

    const makeFetch = async (pokeNumber)=>{

        if(pokeNumber < 1 || pokeNumber > 1008 || pokeNumber==="") return 

        const url = `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`
        const fetchConfig = {
            method: "GET",
            headers:{
                "Content-Type":"application/json"
            }
        }
        
        const resp = await fetch(url,fetchConfig)
        const obj = await resp.json()
        setPoke(obj)

    }

    return(
        <div className="SearchBar"> 
            <form>
                <input 
                type="number"
                placeholder="Número de pokemon"
                onChange={
                    (event)=> {
                        makeFetch(event.target.value);
                    }
                }
                />
            </form>
        </div>
    )
}