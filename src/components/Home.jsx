import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { getHome } from '../redux/homeSlice';
import { Link } from 'react-router-dom';


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
      <h3 className='bg-[#e74886] text-white'>STATS BY TRENDING COIN</h3>
      {
        trending &&
        <Link to='/coin'>
          <div className='grid grid-cols-2 justify-center home-grid'>
            {
            trending.map((coin, i) => {
              const evenClass = `flex flex-col p-3 bg-[#e74886]`;
              const oddClass = `flex flex-col p-3 bg-[#d04379]`;
              const gridClass = i % 2 == 0 ? evenClass : oddClass;
              return (
                <div key={coin.coin_id} className={gridClass}>
                <span className='self-center pr-6'>
                    <img src={coin.img} alt="coin image"/>
                </span>
                <h3 className='text-white self-end'>{coin.name}</h3>
                <p className='text-white self-end'>{coin.market_cap_rank}</p>
                </div>
              )
            })
            }
          </div>
        </Link>
      }
    </div>
  )
}

export default Home;