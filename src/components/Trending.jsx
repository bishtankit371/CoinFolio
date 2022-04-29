import {useState, useEffect} from "react";


function Trending(){

  const [bitcoin, setBitcoin] = useState(0);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);


useEffect(()=>{
  searchBitcoin();
  searchTrending();
}, []);


async function searchBitcoin(){
  const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
  const data = await res.json();
  setBitcoin(data.bitcoin.usd);
}


async function searchTrending(){
  const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
  const data = await res.json();
  setTrendingCoins(data.coins)
  setLoading(false);
}

// setInterval(function () {
//     searchBitcoin();
//     searchTrending();
// }, 10000);


if(loading){
  return(
    <h1> Loading .. </h1>
  )
}else{




  return (
    <div className="w-25 border my-4 mx-4 bg-light rounded shadow-lg">

    <h3 className="mx-4 my-2 px-4"> Trending 🔥</h3>
    <hr />


    {trendingCoins.map((coin) => (

    <div className="d-flex my-2 mx-4 justify-content-between px-4">
    <img src={coin.item.small} />
      <p> {coin.item.name} </p>
      <p> $ {(coin.item.price_btc * bitcoin).toFixed(3)}</p>
    </div>

    ))}



    </div>
  )
}




}

export default Trending
