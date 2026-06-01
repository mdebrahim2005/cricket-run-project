import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cricket from './cricket'
import cricketImg from './assets/cricket.jpg'








function App() {

  const [run, setrun] = useState(0)
  const [sixes, setSixes] = useState(0)
 
  function handleRun() {
    setrun(run + 1)
  }
  function handleFour() {
    setrun(run + 4)
  }
  function handleSix() {
    setrun(run + 6)
    setSixes(sixes + 1)
   
  }
  function resetGame() {
    setrun(0)
    setSixes(0)
  }

  return (
    <>
      <section id="center">
        <img src={cricketImg} alt="" className="cricket-img" />
        
        <h1>Cricket runs count Project</h1>
        <Cricket run={run} sixes={sixes} />
   {run >= 100 ? (
         
          <div className="win-screen">
            <h2 className='h2'>
              🎉 🏆 CONGRATULATIONS! YOU WIN! 🏆 🎉
            </h2>
            <div className="celebration">
                <button className='btn2' 
              onClick={resetGame}>
              Play Again 🔄
            </button>
            </div>
             
          </div>
        ) : (
      
          <div className="btn">
            <button onClick={handleRun}>single</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>six</button>
          </div>
        )}
        {/* <div className="btn">
          <button onClick={handleRun}>single</button>
          <button onClick={handleFour}>four</button>
          <button onClick={handleSix}>six</button>
        </div> */}
        
      </section>

   
    </>
  )
}

export default App
