import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = `Home`
  }, [])

  return (
    <>
      <h2>Selamat datang!</h2>

      <p>Saya rangkum materi React JS di PTP ini, berikut dengan demo.</p>
      
      <p>Untuk dapat memahami bagaimana cara kerjanya, Anda bisa membuka browser dengan code editor, dan jelajah secara bersamaan.</p>
    </>
  )
}