import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js"




class PokeService {
async getPokeByIndex(index) {
    const res = await pokeApi.get(index)
    console.log('get by index', res.data);
    appState.pokemon = new Pokemon(res.data)
    console.log('got the pokemonnnn', appState.pokemon);
}
}


export const pokeService = new PokeService