import React from "react";

/*  background, display inline-block,border, padding, margin, grow animation*/
const Card = ({ name, email, id }) => {
    return (
        <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2> {name} </h2>
                <p> {email} </p>
            </div>
        </div>
    )
}

export default Card;