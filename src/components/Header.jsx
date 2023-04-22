import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-[#e74886] py-1">
      <Link to="/">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>

      </Link>
    </div>
  )
}

export default Header