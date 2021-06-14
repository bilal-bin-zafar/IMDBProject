import React from 'react';

function Search (props){
    //console.log(props.handleInput);
    return (
        <section className="searchbox-wrap">
            <input  
            type="text" 
            placeholder = "Search for movie here ..." 
            className="searchbox" 
            onChange={props.handleInput}
            onKeyPress={props.search}
            />
        </section>
    )
}
export default Search;