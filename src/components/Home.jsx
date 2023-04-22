import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { getHome } from '../redux/homeSlice';


const Home = () => {
  const {trending} = useSelector((state) => state.trending);
  const dispatch = useDispatch();

  console.log(trending);
  useEffect(() => {
    if (trending.length > 0) {
      return;
    }
    dispatch(getHome());
  }, [dispatch])

  return (
    <div>

      {
        trending &&
        <div className='grid grid-cols-2'>
          {
           trending.map((coin) => {
            return (
              <div key={coin.coin_id}>
              <span>
                  <img src={coin.img} alt="coin iamge"/>
              </span>
              <p>{coin.name}</p>
              <p>{coin.market_cap_rank}</p>
              </div>
            )
           })
          }
        </div>
      }
    </div>
  )
}

export default Home;