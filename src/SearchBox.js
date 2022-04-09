import React from "react";

const SearchBox = () => {
    return (
        <div className='pa2'>
            <input
                className='pa2 ma2 ba b--blue bg-lightest-blue'
                type='search'
                placeholder='Search Robots...'
            />
        </div>
    );
}

export default SearchBox;