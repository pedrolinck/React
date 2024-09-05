import { useState } from 'react'
import './App.css'

const photos = [
  "https://unsplash.com/pt-br/fotografias/estruturas-proximas-ao-corpo-dagua-t2hgHV1R7_g",
  "https://unsplash.com/pt-br/fotografias/cerca-de-aco-preto-xhnimDJm0CU",
  "https://unsplash.com/pt-br/fotografias/vista-aerea-fotografia-da-cidade-Dymu1WiZVko"
]
function App() {

  const [image, setImage] = useState(0);

  function handlePrevImage(){
    setImage( image === photos.length - 1 ? 0 : image + 1);
  }

  function handleNextImage(){
    setImage( image === 0 ? photos.length - 1 : image - 1)
  }

  return (
    <div>
      <h1>Photo Album</h1>
      <div className="slider">
        <button className='left-arrow' onClick={handlePrevImage}>
          {"<<"}
        </button>
        <button className='right-arrow' onClick={handleNextImage}>
          {">>"}
        </button>
        <div>  
          {photos.map(
            (image, index) => photos === index && (
              <div key={image} className='slide'>
                <img src={image} alt="images" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App