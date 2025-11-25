import { useNavigate } from 'react-router-dom'
import Roombg from '../assets/roombg.jpeg'
import Shnau from '@/assets/shanu.jpeg'
import Sound from '@/assets/WhatsApp Audio 2025-11-26 at 00.10.01.mp4'
const roomone = () => {
  const navigate = useNavigate()
  
  const playSound = () => {
    const audio = new Audio(Sound)
    audio.play()
  }

  return (
    <div className="h-screen flex items-center justify-center relative bg-cover bg-center " style={{ backgroundImage: `url(${Roombg})` }}>
      <button onClick={() => navigate('/')} className="absolute top-5 left-5 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-300 border-2 border-white/20">← Back</button>
      <img src={Shnau} alt="Shnu" className="w-80 cursor-pointer rounded-lg shadow-xl hover:scale-105 transition-transform" onClick={playSound} />
    </div>
  )
}

export default roomone