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
      <h3 className='bg-[#df4783] text-white'>STATS BY TRENDING COIN</h3>
      {
        trending &&
        <>
          <div className='grid grid-cols-2 justify-center home-grid'>
            {
            trending.map((coin, i) => {
              const evenClass = `flex flex-col p-3 bg-[#dd4983]`;
              const oddClass = `flex flex-col p-3 bg-[#d04379]`;
              const gridClass = i % 2 == 0 ? evenClass : oddClass;
              return (
                <Link to={`${coin.id}`} key={coin.coin_id}>
                  <div className={gridClass}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-end text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <span className='self-center pr-6'>
                        <img src={coin.img} alt="coin image"/>
                    </span>
                    <h3 className='text-white self-end'>{coin.name}</h3>
                    <p className='text-white self-end'>{coin.market_cap_rank}</p>
                  </div>
                </Link>
              )
            })
            }
          </div>
        </>
      }
    </div>
  )
}

export default Home;