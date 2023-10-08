import React from 'react';
import MainTitle from '../MainTitle/MainTitle';
import cl from './CharacterDetails.module.scss';
import { getEpisodeNum } from '../../helpers/getEpisodeTitle';
import classNames from 'classnames';
import { getSeason } from '../../helpers/getSeason';

const CharacterDetails = ({ character }) => {
    const { name, image, status, species, gender, origin, location, episode } = character;


    return (
        <article>
            {/*<div>{JSON.stringify(character)}</div>*/}
            <MainTitle left>{name}</MainTitle>
            <div className={cl.wrap}>
                <div className={cl.desc}>
                    <img className={cl.img} src={image} alt={name}/>
                    <p><strong>Status:</strong> {status}</p>
                    <p><strong>Species:</strong> {species}</p>
                    <p><strong>Gender:</strong> {gender}</p>
                    <p><strong>Origin:</strong> {origin?.name}</p>
                    <p><strong>The last known location:</strong> {location?.name}</p>
                </div>
                <div className={cl.episodes}>
                    <h2 className={cl.subtitle}>List of episodes in which this character appeared</h2>
                    <ul className={cl.list}>
                        {episode?.map((ep) => <li key={ep}
                                                 className={classNames(cl.item, cl[`item${getSeason(getEpisodeNum(ep))}`])}>
                            {`Episode ${getEpisodeNum(ep)}`}
                        </li>)}
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default CharacterDetails;