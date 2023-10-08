import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import APIService from '../../API/APIService';
import CharacterDetails from '../../components/CharacterDetails/CharacterDetails';
import Loader from '../../components/Loader/Loader';

const CharacterPage = () => {
    const params = useParams();
    const [character, setCharacter] = useState({});

    const [fetchCharacter, isLoading, characterError] = useFetch(async () => {
        const response = await APIService.getCharacterByID(params.id);
        setCharacter(response.data);
    });

    useEffect(() => {
        fetchCharacter();
    }, []);

    return (
        <>
            {characterError && <p>Error: ${characterError}</p>}
            {isLoading
                ? <Loader/>
                : <CharacterDetails character={character}/>
            }
        </>
    );
};

export default CharacterPage;