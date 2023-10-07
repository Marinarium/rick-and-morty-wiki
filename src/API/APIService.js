import axios from 'axios';

export default class APIService {
    static async getCharacters () {
        const response = await axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5,22,99,122');

        return response;
    }

    static async getCharacterByID (id) {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`,);
        return response;
    }
}