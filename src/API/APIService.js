import axios from 'axios';

export default class APIService {
    static async getCharacters () {
        const response = await axios.get('https://rickandmortyapi.com/api/character/');

        return response;
    }

    static async getCharacterByID (id) {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        return response;
    }
}