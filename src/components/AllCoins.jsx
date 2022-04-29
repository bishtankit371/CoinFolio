import {Link} from "react-router-dom";
import {useEffect, useState} from "react"


function AllCoins(){

const [coins, setCoins] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(()=>{
  searchCoins();
}, []);

async function searchCoins(){
  const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  const data = await res.json();
  setCoins(data);
  setLoading(false);
}

if(loading){

  return (<h4> Loading.... </h4>);
}else{
  return(
    <>


  <div className="w-75 mx-4 my-2 border bg-light rounded shadow-lg">

  <div className="my-4 mx-4 d-flex flex-row">
  <h5 className="mx-4"> #Rank </h5>
  <div className=" w-25">
    <h5 className=" mx-4"> Name </h5>
  </div>
    <h5 className="mx-4"> $ Price</h5>
  </div>

  <hr />

  {coins.map((coin) => (

  <div className="my-2 mx-4 d-flex flex-row">
  <p className="mx-4"> {coin.market_cap_rank} </p>
  <img src={coin.image} className="coin-logo"/>
  <div className=" w-25">
    <p className=" mx-4"> {coin.name} </p>
  </div>
    <p className="mx-4"> $ {(coin.current_price).toFixed(3)}</p>
  </div>

  ))}

  </div>



  </>
  );
}


}

export default AllCoins
