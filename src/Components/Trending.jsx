 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCaretUp } from "react-icons/fa";
export default function Trending() {
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
      const fetchTrendingCoins = async () => {
        try {
          const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
          const coins = response.data.coins.slice(0, 3).map(({ item }) => ({
            name: item.name,
            thumb:item.thumb,
            symbol:item.symbol,
            price_change_percentage_24h: item.price_change_percentage_24h,

          }));
          setTrendingCoins(coins);
        } catch (error) {
          console.error('Error fetching trending coins:', error);
        }
      };
  
      fetchTrendingCoins();
    }, []);
  return (
    <div className="crypto_trending">
    <h2>Trending Coins (24H) </h2>
   
    {trendingCoins.map((coin, index) => (

           <div key={index} className="Coins_list">
            <img src={coin.thumb} alt="" width='15px' height='20px' />
           <li>{coin.name}({coin.symbol})</li>
           <h6 className='crypto_growth trending_growth'><FaCaretUp />{Math.trunc(coin.price_change_percentage_24h)}%</h6>
   
       </div>
        ))}

</div>
  )
}
