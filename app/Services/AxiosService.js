// @ts-ignore
export const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
    timeout: 2500
})
  // @ts-ignore
export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api',
    timeout: 2500
})