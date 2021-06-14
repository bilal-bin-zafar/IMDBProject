import React from 'react'

function Popup({selected, closePopup}){
    console.log(selected, "From POPUP Comp")
return (
    <section className = "popup">
        <div className="content">
            <h2>{selected.Title} <span>({selected.Year})</span></h2>
            <p className="rating"> Rating: {selected.imdbRating} </p>
        <img src = {selected.Poster} alt =""/>
        <p> {selected.Plot}</p>
        </div>
        <button className="close" onClick={closePopup} >Close</button>
    </section>
)
}

export default Popup