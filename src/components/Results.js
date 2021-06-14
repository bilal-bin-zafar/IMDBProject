import React from 'react'
import Result from './Result'


function Results ({ results, openPopup }){
console.log(typeof openPopup, openPopup)
return(
    <section className="results">
			{results.map(result => (
			
				<Result key={result.imdbID}
				 result={result} 
				 openPopup={openPopup}/>

			))}
		</section>
)
}

export default Results;