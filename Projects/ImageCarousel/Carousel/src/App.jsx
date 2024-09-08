import { useState } from 'react'
import './App.css'

const album = [
  "https://static01.nyt.com/images/2023/09/24/multimedia/24-36Hrs-Amsterdam-01-01-cwqt/24-36Hrs-Amsterdam-01-01-cwqt-videoSixteenByNine3000.jpg",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.CNoAUtFCtpGO9kjXTyggZAHaEo%26pid%3DApi&f=1&ipt=56570744630c33d62ce259483976b36208e0531e4644102bc971313d363b029d&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F79%2Fec%2F8f%2F79ec8f671d56e5ccea0917df6038db80.jpg&f=1&nofb=1&ipt=17b8c41df69ecfbf513227ac46111f2372d44fa80615d82bce7821aab2cff2b2&ipo=images"

];
export default function App() {

  const [image, setImage] = useState(0);

  function handlePrevImage(){
    setImage( image === album.length - 1 ? 0 : image + 1);
  }

  function handleNextImage(){
    setImage( image === 0 ? album.length - 1 : image - 1)
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
          {album.map(
            (images, index) => image === index && (
              <div key={images} className='slide'>
                <img src={images} alt="" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}