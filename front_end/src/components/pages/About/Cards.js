import React from 'react';
import './Cards.css';
import CardItem2 from './CardItem';

function Cards3() {
    return (
        <div className='cards_found' >
            <h1>About us </h1>
            <div className='cards_found__container'>
                <div className='cards_found__wrapper'>
                    <ul className='cards_found__items'>
                        <CardItem2
                            src="https://avatars.githubusercontent.com/u/63066416?s=400&u=9882a916d8333baae752b808c4c9828108876db7&v=4"
                            text='Alexandra Kaparou'
                            path='https://github.com/alexandrakapa'
                        />
                    </ul>
                    <ul className='cards_found__items'>
                        <CardItem2
                            src="https://avatars.githubusercontent.com/u/45352904?s=400&u=cf815953b4cef9819e16deeabac8859690afbbff&v=4"
                            text='Nikolaos Giorgoulakis'
                            path='https://github.com/nikosgio'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards3;