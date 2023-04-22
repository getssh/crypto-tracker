import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getCoin } from '../redux/coinSlice';
import { useEffect } from 'react';


const CoinDetail = () => {
  const params = useParams();
  const coins = useSelector((state) => state.coins.coins)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoin(params.id));
  }, [dispatch])

  const tempDAta = Object.keys(coins.market_data.current_price).map(key => {

    return (
    <div key={key}>{params.id} vs {key.toUpperCase()} {coins.market_data.current_price[key]}</div>
    )
  }
  )
  
  console.log(params);
  console.log(coins);
  return (
    <div>
      {
      coins &&
      <div>
        <>
          <div>{coins.id}</div>
          <div>{coins.market_cap_rank}</div>
          <div>{coins.market_data.high_24h.usd}</div>
          <div>{coins.market_data.low_24h.usd}</div>
          <div>{coins.market_data.circulating_supply}</div>
          <div>{coins.market_data.current_price.usd}</div>
          <div>{coins.market_data.price_change_percentage_1y.toFixed(2)}%</div>
          <div>{coins.coingecko_rank}</div>
          <div>{coins.community_score}</div>
          <div>{coins.liquidity_score}</div>
          <div>
            <div>
              {tempDAta}
            </div>
          </div>
        </>
      </div>
      }
    </div>
  )
}

export default CoinDetail;