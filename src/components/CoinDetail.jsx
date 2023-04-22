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
  return (
    <div>
      {
        coins &&
        <p>{coins.id}</p>
      }
    </div>
  )
}

export default CoinDetail