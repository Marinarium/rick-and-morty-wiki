import React, { useEffect, useState } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import MainTitle from '../../components/MainTitle/MainTitle';
import CardList from '../../components/CardList/CardList';

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchCharacters () {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,22,99,122');
                // const response = await fetch('https://rickandmortyapi.com/api/character'); //need add results

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setCharacters(result);
                console.log(characters);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }

        fetchCharacters();
    }, []);

    return (
        <div>
            <MainTitle>Characters</MainTitle>
            <CardList>
                {characters.map((character) => <CharacterCard key={character.id} character={character}/>)}
            </CardList>
        </div>
    );
};

export default CharactersPage;