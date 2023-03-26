import React,{useState} from "react"
import './App.css';

function App() {

  const [firstLoad,isFirstLoad] = useState(true)

  const getQuote=()=>{
    const data = document.getElementById('btnQuote').innerText
    isFirstLoad(false)
    // if(firstLoad == false){
      nextjoke()  
      document.getElementsByClassName('Auther')[0].style.display ="block"
 

   
    
  }

  const nextjoke = async () => {
    let api = await (await fetch("https://type.fit/api/quotes")).json();
    const no = Math.round(Math.random() * 1000);
    document.getElementById('joke_holder').innerHTML = api[no].text;
    document.getElementById('auther_name').innerHTML = api[no].author;
  }

  return (
    <>
      <div className="main_container">
        <div className="container">
          <div className="QuoteDiv">

            <h1 id="joke_holder"> Click To Get Quote</h1>
          </div>
          <div className="AuthorDiv">
            <h3 className="Auther">Auther: </h3>
            <p id="auther_name"></p>
          </div>
          <button onClick={getQuote} id='btnQuote'>
          {(firstLoad) ?"Get Quote":"Next Quote"}

          </button>
        </div>



      </div>
    </>
  );
}

export default App;
