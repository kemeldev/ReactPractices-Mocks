import { useEffect, useState } from "react"

export default function App (){

  const [mouseFollower , setMouseFollower] = useState(false)
  const [positions, setPosition] = useState({})

  console.log();

  useEffect(() => {

    const handleMove = (e) =>{
      const newPositions = {
        x : e.clientX,
        y : e.clientY
      }
      setPosition(newPositions)
    }

    if (mouseFollower){      
      document.addEventListener('mousemove', handleMove)      
    } 

    return () => {
      document.removeEventListener('mousemove', handleMove)
    }
  }, [mouseFollower])

  useEffect(() => {
    document.body.classList.toggle('noCursor', mouseFollower)

    return () => {
      document.body.classList.remove('noCursor')
    }

  },[mouseFollower])


  const handleEffect = () => {
    setMouseFollower(prevState => !prevState)
  }
  return(
    <>
      <button
        onClick={handleEffect}
      >
        {
          mouseFollower ? 'Desactivate Mouse Follower Effect' :  'Activate Mouse Follower Effect'
        }
      </button>
      <div 
        className="ball"
        style={{transform : `translate(${positions.x}px, ${positions.y}px)`}}
       
        ></div>
    </>
  )
}