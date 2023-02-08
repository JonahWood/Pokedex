export class Pokemon {
    constructor(data) {
        this.id = data.id || null
        this.name = data.name
        this.img = data.sprites
        this.weight = data.weight
        this.height = data.height
    }

    get BigPokeTemplate() {
        return `
        <div class="col-8 m-auto p-4 rounded elevation-1 border border-dark border-2 poke-card">
        <h1>${this.name}</h1>
        <div class="d-flex justify-content-between">
            // <h2>Type: ${this.type}</h2>
        </div>
        <div class="d-flex justify-content-between">
            <h6>Weight: ${this.weight}</h6>
            <h6>Height: ${this.height}</h6>
        </div>
        <div class=" d-flex justify-content-center">
            <img class="poke-img" src="${this.img}" alt="">
        </div>
        </div> 
        `
    }
}