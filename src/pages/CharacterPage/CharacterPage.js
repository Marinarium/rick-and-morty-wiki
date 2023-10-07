import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import APIService from '../../API/APIService';

const CharacterPage = () => {
    const params = useParams();
    const [character, setCharacter] = useState({});

    const [fetchCharacter] = useFetch(async () => {
        const response = await APIService.getCharacterByID(params.id);
        setCharacter(response.data);
    });

    useEffect(() => {
        fetchCharacter();
    }, []);

    return (
        <div>
            This character
            {character.name}
        </div>
    );
};

export default CharacterPage;