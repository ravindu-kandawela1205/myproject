import { useNavigate } from 'react-router-dom'
import Lana from '../assets/images (1).jpg'

const home = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div 
        onClick={() => navigate('/room')}
        className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 border border-white/20 shadow-2xl hover:shadow-purple-500/25"
      >
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={Lana} 
            alt="Room" 
            className="w-80 h-56 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Enter Room
          </div>
        </div>
      </div>
    </div>
  )
}

export default home