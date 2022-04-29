import Header from "./Header.jsx";
import AllCoins from "./AllCoins.jsx";
import Trending from "./Trending.jsx";
import {useRef, useState, useEffect} from "react";

function Home(){

const inputRef = useRef(null);

const [coin, setCoin] = useState(null);
const [error, setError] = useState(false);

useEffect(()=>{
  setError(false);
}, []);

function coinName(){
  console.log(inputRef.current.value);
  searchCoin(inputRef.current.value);
}

async function searchCoin(name){
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${name}`);
    const data = await res.json();

if(data.error){
  setError(true);
  console.log("error ran");
}else{
  setCoin(data);
  console.log("success ran");
  console.log(data);
}
}





if(error){

  return (
    <>
    <h3> No such coin found </h3>
    <a href="/"> Back to seach </a>
    </>
  );

}else{
  if(coin == null){

    return(
      <>
    <Header />
    <div className="d-flex">

    <div className="w-50 mx-4 my-4 border bg-light rounded shadow-lg">

    <div className="input-group mx-4 my-4">
    <input className="rounded my-2" type="text" placeholder="search crypto" ref={inputRef}/>
    <button className="btn btn-md btn-primary mx-1 rounded my-2" onClick={coinName} > GO </button>
    </div>
    <h4 className="mx-4 "> Please use the above search bar to search a coin! </h4>
    </div>

    <Trending />

    </div>

    <AllCoins />
    </>
    );

  }else{

    return(
      <>
    <Header />
    <div className="row">

    <div className="w-50 mx-4 my-4 border bg-light rounded shadow-lg">

    <div className="input-group mx-4 my-4">
    <input className="rounded my-2" type="text" placeholder="search crypto" ref={inputRef}/>
    <button className="btn btn-md btn-primary mx-1 rounded my-2" onClick={coinName} > GO </button>
    </div>

    <div className="mx-4 row align-items-end">
    <h4 className="col-2"> #Rank: {coin.market_cap_rank}</h4>
    <img className="col-2 coin-logo-home" src={coin.image.small} />
  <h4 className="col-2"> {coin.name} </h4>
  <h4 className="col-2"> $ {coin.market_data.current_price.usd} </h4>
  </div>

    </div>

    <Trending />

    </div>


<AllCoins />

    </>
    );

  }
}






}

export default Home
