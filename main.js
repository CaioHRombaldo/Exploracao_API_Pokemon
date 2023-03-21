class Pokemon {
    async load_pokemons(limit){
        let content = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
        this.pokemons = await content.json()
    }

    async get_pokemons (){
        return this.pokemons.results
    }

    async get_pokemon (id){
        return this.pokemons.results[id-1].name
    }
    
}

async function main() {
    let provider = new Pokemon()
    await provider.load_pokemons(151)
    
    let bulbassaur = await provider.get_pokemon(1)
    console.log(bulbassaur)
    
    let pokemons = await provider.get_pokemons()
    for (let i = 0; i < pokemons.length; i++) {
        console.log('Id', i+1, 'Nome:', pokemons[i]['name'])
    }
}

main()
