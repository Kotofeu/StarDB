import axios from "axios";

export default class Service {
    static async getAllStarships() {
        const response = await axios.get('https://swapi.dev/api/starships')
        return response;
    }

    static async getByIdStarships(id) {
        const response = await axios.get('https://swapi.dev/api/starships/' + id)
        return response;
    }
    static async getAllPlanets() {
        const response = await axios.get('https://swapi.dev/api/planets')
        return response;
    }

}
