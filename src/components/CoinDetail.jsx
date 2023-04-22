import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getCoin } from '../redux/coinSlice';
import { useEffect } from 'react';


const CoinDetail = () => {
  const params = useParams();
  const {coins, isLoading, error} = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoin(params.id));
  }, [dispatch]);

  console.log(params);
  console.log(coins);

  // if (!coins) {
  //   return null;
  // }

  // const tempData = Object.keys(coins.market_data.current_price).map((key) => {
  //   return <div key={key}>{key}: {coins.market_data.current_price[key]}</div>;
  // });
  
  return (
    
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
        <h3>hello</h3>
        <div>{coins.id}</div>
        <div>{coins.market_cap_rank}</div>
        <div>{coins.coingecko_rank}</div>
        <div>{coins.community_score}</div>
        <div>{coins.liquidity_score}</div>
        <div>{coins["sentiment_votes_up_percentage"]}</div>
        <div>{coins["sentiment_votes_down_percentage"]}</div>
        <div>{coins["watchlist_portfolio_users"]}</div>
    </div>
  )
}

export default CoinDetail;