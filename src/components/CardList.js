import React from 'react';
import Card from './Card';

//cardList component that lists Cards, with our passing of { robot } property//
const CardList = ({ robots }) => {
    return (
        <>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </>
    );
}

export default CardList;