import { useNavigate } from 'react-router-dom'
import Roombg from '../assets/roombg.jpeg'
import Shnau from '@/assets/shanu.jpeg'
import Sound from '@/assets/WhatsApp Audio 2025-11-26 at 00.10.01.mp4'
import Clicksound from '@/assets/buttonclick.mp3'

const roomone = () => {
  const navigate = useNavigate()
  
  const playClickSound = () => {
    const audio = new Audio(Clicksound)
    audio.play()
  }

  const playSound = () => {
    const audio = new Audio(Sound)
    audio.play()
  }

  const handleBackClick = () => {
    playClickSound()
    navigate('/')
  }

  const handleImageClick = () => {
    playClickSound()
    playSound()
  }

  const handleSideButtonClick = () => {
    playClickSound()
    navigate('/room')
    // Add navigation or action here
  }

  return (
    <div className="h-screen flex items-center justify-center relative bg-cover bg-center " style={{ backgroundImage: `url(${Roombg})` }}>
      <button onClick={handleBackClick} className="absolute top-5 left-5 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-300 border-2 border-white/20">← Back</button>
      <button onClick={handleSideButtonClick} className="absolute top-1/2 right-5 transform -translate-y-1/2 px-6 py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-full shadow-lg hover:from-pink-600 hover:to-red-700 hover:scale-105 transition-all duration-300 border-2 border-white/20">Go to fuck with</button>
      <img src={Shnau} alt="Shnu" className="w-80 cursor-pointer rounded-lg shadow-xl hover:scale-105 transition-transform" onClick={handleImageClick} />
    </div>
  )
}

export default roomone