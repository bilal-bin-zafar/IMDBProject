import React, {useState} from 'react'
import Search from './components/search'
import Results from './components/Results'
import Popup from './components/Popup';
import axios from 'axios';
//import { useAsync } from "react-async";

function App() {

  const [state,setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=c83778b6";
  //this.openPopup=this.openPopup.bind(this)
  const search = (e) => {
    if(e.key=== "Enter") {
          axios(apiurl + "&s=" + state.s).then((resp) =>{
           //console.log(resp);
            let results =resp.data.Search;
        setState (prevState=>{
          return {...prevState, results:results}
        })
        //console.log(data);
      });
    }
  }

  const handleInput = (e) => {
    let s =e.target.value;

    setState(prevState => {
      return{...prevState,s: s}
    });
    //console.log(state.s);
  }

  const openPopup =id => {
  //  console.log("openPopup")
  //console.log(id, 'From openPopup')
    axios(apiurl + "&i=" + id).then(response =>{
      console.log(response, "In OpenPopUp Methond")
      
         // let result = response;
          setState(prevState => {
            
            return{...prevState, selected: response}
          }); 
  });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  


  return (
    <div className="App">
      <header>
      <h1> Movie Search Engine.... !</h1>
     </header>
      <main>
        <Search handleInput= {handleInput}
                   search={search} />

        
        <Results results = {state.results} 
                  openPopup={openPopup} />
   
   {console.log(state, "In APP.JS")}
        {(typeof state.selected.data != "undefined") ? <Popup selected={state.selected.data} closePopup={closePopup} /> : false}
        
      </main>
    </div>
  );
}

export default App;
