import React from 'react';
import cl from './CharacterCard.module.scss';
import { characterGender, characterStatus } from '../../constants/characters';
import classNames from 'classnames';
import SVGIcon from '../SVGIcon/SVGIcon';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({ character }) => {
    const { name, image, status, origin, gender, species, location, id } = character;
    const navigate = useNavigate();

    const nameStyles = {
        [cl.nameFemale]: gender === characterGender.female,
        [cl.nameGenderless]: gender === characterGender.genderless,
        [cl.nameMale]: gender === characterGender.male,
    };

    const statusStyles = {
        [cl.statusAlive]: status === characterStatus.alive,
        [cl.statusDead]: status === characterStatus.dead,
    };

    return (
        <li onClick={() => {navigate(`/characters/${id}`)}} className={cl.card}>
            <img className={cl.img} src={image} alt={name}/>
            <div className={cl.info}>
                <h2 className={classNames(cl.name, nameStyles)}>{name}</h2>
                <p className={classNames(cl.status, statusStyles)}>
                    <SVGIcon
                        aria-label={`The status of the character: ${status}`}
                        width={16}
                        height={16}
                        idValue={status.toLowerCase()}/>
                    {species}
                </p>
                <p className={cl.origin}>
                    <SVGIcon
                        aria-label="The character's origin location."
                        width={16}
                        height={16}
                        idValue="origin"/>
                    {origin.name}</p>
                <p className={cl.location}>
                    <SVGIcon
                        aria-label="The character's last known location endpoint."
                        width={16}
                        height={16}
                        idValue="location"/>
                    {location.name}</p>
            </div>
        </li>
    );
};

export default CharacterCard;
