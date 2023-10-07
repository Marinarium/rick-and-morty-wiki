import React, { useEffect, useState } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import MainTitle from '../../components/MainTitle/MainTitle';
import CardList from '../../components/CardList/CardList';
import { useFetch } from '../../hooks/useFetch';
import APIService from '../../API/APIService';
import Loader from '../../components/Loader/Loader';

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);

    const [fetchCharacters, isLoading, charactersError] = useFetch(async () => {
        const response = await APIService.getCharacters();
        setCharacters(response.data);
    });

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <div>
            <MainTitle>Characters</MainTitle>
            {charactersError && <p>Error: ${charactersError}</p>}
            {isLoading
                ? <Loader/>
                : <CardList>
                    {characters.map((character) => <CharacterCard key={character.id} character={character}/>)}
                </CardList>
            }
        </div>
    );
};

export default CharactersPage;