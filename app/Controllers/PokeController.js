import { pokeService } from "../Services/PokeService.js";
import { Pop } from "../Utils/Pop.js";

export class PokeController {
    constructor() {
        console.log('weee poke controller');
    }

    async getPokeByIndex(index) {
        try {
            await pokeService.getPokeByIndex(index)
        } catch (error) {
            console.error(error)
            Pop.error(error.message)
        }
    }
}