import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Gihan from '../assets/gihan.mp4'

const room = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isForward, setIsForward] = useState(true)
  const navigate = useNavigate()

  const handleToggle = () => {
    if (videoRef.current) {
      if (isForward) {
        videoRef.current.currentTime += 10
      } else {
        videoRef.current.currentTime -= 10
      }
      setIsForward(!isForward)
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <button
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '10px 15px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        ← Back
      </button>
      <div style={{
        border: '3px solid #333',
        borderRadius: '8px',
        padding: '10px',
        backgroundColor: '#f0f0f0'
      }}>
        <video
          ref={videoRef}
          src={Gihan}
          style={{
            width: '600px',
            height: '400px',
            display: 'block'
          }}
        />
      </div>
      <button
        onClick={handleToggle}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {isForward ? 'Forward 10s' : 'Backward 10s'}
      </button>
    </div>
  )
}

export default room